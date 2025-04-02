import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { ActivatedRoute } from '@angular/router';
import { Town } from '../../services/town.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { BreakcrumbItem } from '../../components/breadcrumb/breadcrumb.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-plasterer',

  imports: [BannerComponent],
  templateUrl: './plasterer.component.html',
  styleUrl: './plasterer.component.scss',
})
export class PlastererComponent {
  title: string = 'Expert plaquiste';

  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];

  services: string[] = [
    'Pose de placo',
    'Aménagement intérieur',
    'Cloisons sèches',
    'Isolation phonique',
    'Isolation thermique',
    'Faux plafonds',
    'Rénovation intérieure',
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
