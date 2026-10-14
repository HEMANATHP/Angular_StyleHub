import { RenderMode, ServerRoute } from '@angular/ssr';
import { shops } from './data/shops';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'shops/:shopId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => shops.map((shop) => ({ shopId: String(shop.id) })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
