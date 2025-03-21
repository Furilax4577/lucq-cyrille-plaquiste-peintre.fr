import { Routes } from '@angular/router';
import { ElectricianComponent } from './components/electrician/electrician.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PainterComponent } from './components/painter/painter.component';
import { PlastererComponent } from './components/plasterer/plasterer.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { TilerComponent } from './components/tiler/tiler.component';
import { ConfigTown } from './services/town.service';

import config from './config.json';

import { URLify } from './common';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';

const tilerRoutes: Routes = [
  {
    path: '',
    component: TilerComponent,
  },
];
const painterRoutes: Routes = [
  {
    path: '',
    component: PainterComponent,
  },
];
const plastererRoutes: Routes = [
  {
    path: '',
    component: PlastererComponent,
  },
];
const electricianRoutes: Routes = [
  {
    path: '',
    component: ElectricianComponent,
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
    component: TilerComponent,
  });

  painterRoutes.push({
    data,
    path: URLify(town.name),
    component: PainterComponent,
  });

  plastererRoutes.push({
    data,
    path: URLify(town.name),
    component: PlastererComponent,
  });

  electricianRoutes.push({
    data,
    path: URLify(town.name),
    component: ElectricianComponent,
  });
});

const defaultRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'services',
    children: [
      { path: '', component: ServicesComponent },
      {
        path: 'platrerie',
        component: PlastererComponent,
        children: plastererRoutes,
      },
      {
        path: 'electricite',
        component: ElectricianComponent,
        children: electricianRoutes,
      },
      {
        path: 'peinture',
        component: PainterComponent,
        children: painterRoutes,
      },
      { path: 'carrelage', component: TilerComponent, children: tilerRoutes },
    ],
  },
  { path: 'galerie', component: GaleryComponent },
  { path: 'temoignages', component: TestimoniesComponent },
  { path: 'contactez-moi', component: ContactComponent },
  { path: 'plan-du-site', component: SitemapComponent },
  { path: 'page-introuvable', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-introuvable' },
];

export const routes: Routes = defaultRoutes;
