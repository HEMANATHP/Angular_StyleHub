import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { shops } from '../../../data/shops';

@Component({
  selector: 'app-shop-details',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './shop-details.html',
  styleUrl: './shop-details.css',
})
export class ShopDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  protected readonly shop = computed(() => {
    const shopId = this.params().get('shopId');
    if (!shopId || !/^[1-9]\d*$/.test(shopId)) return undefined;
    return shops.find((shop) => shop.id === Number(shopId));
  });
}
