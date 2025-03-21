import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { URLify } from '../../common';
import { TitleService } from '../../services/title.service';
import { Town, TownService } from '../../services/town.service';
import { BannerComponent } from '../banner/banner.component';
import { BreakcrumbItem } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-sitemap',

  imports: [CommonModule, BannerComponent],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.scss',
})
export class SitemapComponent {
  title: string = 'Plan du site';
  towns: Town[] = [];
  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];

  constructor(
    private townService: TownService,
    private titleService: TitleService
  ) {
    this.towns = this.townService.towns;
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords([this.title]);
  }

  URLify(prefix: string | string[], townName: string) {
    if (Array.isArray(prefix)) {
      return `/${prefix.join('/')}/${URLify(townName)}`;
    }
    return `/${prefix}/${URLify(townName)}`;
  }
}
