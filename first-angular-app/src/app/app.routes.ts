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
];
