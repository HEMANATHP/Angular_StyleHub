import { afterNextRender, computed, Service, signal } from '@angular/core';

interface BagProduct {
  id: number;
  name: string;
  price: number;
}

interface BagItem extends BagProduct {
  quantity: number;
}

@Service()
export class ShoppingBag {
  private readonly storageKey = 'stylehub.bag.v1';
  private readonly bagItems = signal<readonly BagItem[]>([]);
  private restored = false;

  readonly items = this.bagItems.asReadonly();
  readonly count = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));

  constructor() {
    // Restore after a browser render; server rendering never accesses browser storage.
    afterNextRender({ read: () => this.restore() });
  }

  add(product: BagProduct): void {
    this.restore();
    this.bagItems.update((items) => {
      const existing = items.find((item) => item.id === product.id);
      return existing
        ? items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });

    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(this.items()));
    } catch {
      // Keep the bag usable in memory if browser storage is unavailable.
    }
  }

  private restore(): void {
    if (this.restored) return;
    this.restored = true;
    try {
      const saved = window.localStorage.getItem(this.storageKey);
      if (!saved) return;

      const parsed: unknown = JSON.parse(saved);
      if (!Array.isArray(parsed)) return;

      const items: BagItem[] = [];
      for (const candidate of parsed as unknown[]) {
        if (this.isBagItem(candidate) && !items.some((item) => item.id === candidate.id)) {
          items.push(candidate);
        }
      }
      this.bagItems.set(items);
    } catch {
      // Ignore malformed saved data and start with an empty bag.
    }
  }

  private isBagItem(value: unknown): value is BagItem {
    if (typeof value !== 'object' || value === null) return false;
    const item = value as Record<string, unknown>;
    return (
      typeof item['id'] === 'number' &&
      Number.isSafeInteger(item['id']) &&
      item['id'] > 0 &&
      typeof item['name'] === 'string' &&
      item['name'].trim().length > 0 &&
      typeof item['price'] === 'number' &&
      Number.isFinite(item['price']) &&
      item['price'] >= 0 &&
      typeof item['quantity'] === 'number' &&
      Number.isSafeInteger(item['quantity']) &&
      item['quantity'] > 0
    );
  }
}
