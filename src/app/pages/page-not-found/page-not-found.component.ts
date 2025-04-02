import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { BreakcrumbItem } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-page-not-found',

  imports: [BannerComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: 'Page introuvable', url: '' },
  ];
}
