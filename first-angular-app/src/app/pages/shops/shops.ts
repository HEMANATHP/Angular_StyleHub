import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { shops } from '../../data/shops';

@Component({
  selector: 'app-shops',
  imports: [RouterLink],
  templateUrl: './shops.html',
  styleUrl: './shops.css',
})
export class Shops {
  protected readonly shops = shops;
}
