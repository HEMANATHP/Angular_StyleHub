import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'StyleHub | Grooming and style marketplace',
    loadComponent: () => import('./pages/home/home').then((module) => module.Home),
  },
  {
    path: 'services',
    title: 'Services | StyleHub',
    loadComponent: () => import('./pages/services/services').then((module) => module.Services),
  },
  {
    path: 'shops',
    title: 'Find shops | StyleHub',
    loadComponent: () => import('./pages/shops/shops').then((module) => module.Shops),
  },
  {
    path: 'stylists',
    title: 'Stylists | StyleHub',
    loadComponent: () => import('./pages/stylists/stylists').then((module) => module.Stylists),
  },
  {
    path: 'marketplace',
    title: 'Marketplace | StyleHub',
    loadComponent: () =>
      import('./pages/marketplace/marketplace').then((module) => module.Marketplace),
  },
  {
    path: 'bookings',
    title: 'My bookings | StyleHub',
    loadComponent: () => import('./pages/bookings/bookings').then((module) => module.Bookings),
  },
];
