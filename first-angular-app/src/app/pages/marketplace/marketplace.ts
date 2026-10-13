import { Component, computed, signal } from '@angular/core';

type ProductCategory = 'Hair care' | 'Styling' | 'Beard care';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  tone: string;
  productShape: 'bottle' | 'jar' | 'tube';
}

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.html',
  styleUrl: './marketplace.css',
})
export class Marketplace {
  protected readonly categories = ['All products', 'Hair care', 'Styling', 'Beard care'] as const;
  protected readonly selectedCategory = signal<(typeof this.categories)[number]>('All products');
  protected readonly searchTerm = signal('');
  protected readonly bagCount = signal(0);

  protected readonly products: Product[] = [
    {
      id: 1,
      name: 'Daily Nourish Shampoo',
      brand: 'Root Ritual',
      category: 'Hair care',
      description: 'A gentle, plant-powered cleanse for softer, healthier-looking hair.',
      price: 24,
      rating: 4.9,
      reviews: 128,
      badge: 'Bestseller',
      tone: '#d6e5c9',
      productShape: 'bottle',
    },
    {
      id: 2,
      name: 'Matte Finish Clay',
      brand: 'Form & Field',
      category: 'Styling',
      description: 'Flexible hold and a natural matte finish, without the heavy feel.',
      price: 19,
      rating: 4.8,
      reviews: 86,
      tone: '#e8c9a8',
      productShape: 'jar',
    },
    {
      id: 3,
      name: 'Beard Conditioning Oil',
      brand: 'North Standard',
      category: 'Beard care',
      description: 'A lightweight blend to soften facial hair and nourish the skin beneath.',
      price: 22,
      rating: 4.9,
      reviews: 94,
      badge: 'Popular',
      tone: '#d7b881',
      productShape: 'bottle',
    },
    {
      id: 4,
      name: 'Hydrating Hair Mask',
      brand: 'Root Ritual',
      category: 'Hair care',
      description: 'A weekly moisture boost for smoothness, shine, and easy styling.',
      price: 28,
      rating: 4.7,
      reviews: 61,
      tone: '#e7c5c2',
      productShape: 'jar',
    },
    {
      id: 5,
      name: 'Texturizing Sea Mist',
      brand: 'Form & Field',
      category: 'Styling',
      description: 'Build effortless texture and movement with a light, touchable hold.',
      price: 18,
      rating: 4.6,
      reviews: 52,
      tone: '#b8d2d2',
      productShape: 'bottle',
    },
    {
      id: 6,
      name: 'Daily Beard Wash',
      brand: 'North Standard',
      category: 'Beard care',
      description: 'A refreshing, non-drying wash made for your beard and the skin underneath.',
      price: 16,
      rating: 4.8,
      reviews: 73,
      tone: '#c9d0bf',
      productShape: 'tube',
    },
  ];

  protected readonly filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const search = this.searchTerm().trim().toLowerCase();

    return this.products.filter((product) => {
      const matchesCategory = category === 'All products' || product.category === category;
      const matchesSearch =
        search.length === 0 ||
        `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  });

  protected selectCategory(category: (typeof this.categories)[number]): void {
    this.selectedCategory.set(category);
  }

  protected updateSearch(event: Event): void {
    const input = event.target;
    if (input instanceof HTMLInputElement) {
      this.searchTerm.set(input.value);
    }
  }

  protected addToBag(): void {
    this.bagCount.update((count) => count + 1);
  }
}
