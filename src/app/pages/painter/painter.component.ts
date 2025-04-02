import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { ActivatedRoute } from '@angular/router';
import { Town } from '../../services/town.service';
import { Subscription } from 'rxjs';
import { BannerComponent } from '../../components/banner/banner.component';
import { BreakcrumbItem } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-painter',
  imports: [BannerComponent],
  templateUrl: './painter.component.html',
  styleUrl: './painter.component.scss',
})
export class PainterComponent {
  title: string = 'Peintre éprouvé';

  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];

  services: string[] = [
    'Peinture intérieure',
    'Peinture extérieure',
    'Rénovation de peinture',
  ];

  private _town?: Town;
  private _subscription: Subscription[] = [];

  constructor(
    private titleService: TitleService,
    private route: ActivatedRoute
  ) {
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords([this.title, ...this.services]);
  }

  ngOnInit() {
    this.route.firstChild?.data.subscribe((data) => {
      this._town = data['town'];
    });
  }

  getTown(prefix?: string, suffix?: string): string {
    if (this._town) {
      return `${prefix ?? ''} ${this._town.name} ${suffix ?? ''}`;
    }
    return '';
  }

  ngOnDestroy() {
    this._subscription.forEach((s) => {
      s.unsubscribe();
    });
  }
}
