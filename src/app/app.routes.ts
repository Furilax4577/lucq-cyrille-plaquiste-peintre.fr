import { Routes } from '@angular/router';
import { ConfigTown } from './services/town.service';
import config from './config.json';
import { URLify } from './common';

const tilerRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/tiler/tiler.component').then((m) => m.TilerComponent),
  },
];
const painterRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/painter/painter.component').then(
        (m) => m.PainterComponent
      ),
  },
];
const plastererRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/plasterer/plasterer.component').then(
        (m) => m.PlastererComponent
      ),
  },
];
const electricianRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/electrician/electrician.component').then(
        (m) => m.ElectricianComponent
      ),
  },
];

config.towns.forEach((town: ConfigTown) => {
  const data = {
    town: {
      name: town.name,
      postalCode: town.postalCode,
    },
  };

  tilerRoutes.push({
    data,
    path: URLify(town.name),
    loadComponent: () =>
      import('./pages/tiler/tiler.component').then((m) => m.TilerComponent),
  });

  painterRoutes.push({
    data,
    path: URLify(town.name),
    loadComponent: () =>
      import('./pages/painter/painter.component').then(
        (m) => m.PainterComponent
      ),
  });

  plastererRoutes.push({
    data,
    path: URLify(town.name),
    loadComponent: () =>
      import('./pages/plasterer/plasterer.component').then(
        (m) => m.PlastererComponent
      ),
  });

  electricianRoutes.push({
    data,
    path: URLify(town.name),
    loadComponent: () =>
      import('./pages/electrician/electrician.component').then(
        (m) => m.ElectricianComponent
      ),
  });
});

const defaultRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.routes),
  },
  {
    path: 'services',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/services/services.component').then(
            (m) => m.ServicesComponent
          ),
      },
      {
        path: 'platrerie',
        loadComponent: () =>
          import('./pages/plasterer/plasterer.component').then(
            (m) => m.PlastererComponent
          ),
        children: plastererRoutes,
      },
      {
        path: 'electricite',
        loadComponent: () =>
          import('./pages/electrician/electrician.component').then(
            (m) => m.ElectricianComponent
          ),
        children: electricianRoutes,
      },
      {
        path: 'peinture',
        loadComponent: () =>
          import('./pages/painter/painter.component').then(
            (m) => m.PainterComponent
          ),
        children: painterRoutes,
      },
      {
        path: 'carrelage',
        loadComponent: () =>
          import('./pages/tiler/tiler.component').then((m) => m.TilerComponent),
        children: tilerRoutes,
      },
    ],
  },
  {
    path: 'galerie',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      ),
  },
  {
    path: 'temoignages',
    loadComponent: () =>
      import('./pages/testimonies/testimonies.component').then(
        (m) => m.TestimoniesComponent
      ),
  },
  {
    path: 'contactez-moi',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'plan-du-site',
    loadComponent: () =>
      import('./pages/sitemap/sitemap.component').then(
        (m) => m.SitemapComponent
      ),
  },
  {
    path: 'page-introuvable',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
  { path: '**', redirectTo: '/page-introuvable' },
];

export const routes: Routes = defaultRoutes;
