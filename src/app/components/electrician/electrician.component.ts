import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { BannerComponent } from '../banner/banner.component';
import { BreakcrumbItem } from '../breadcrumb/breadcrumb.component';
import { ActivatedRoute } from '@angular/router';
import { Town } from '../../services/town.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-electrician',

  imports: [BannerComponent],
  templateUrl: './electrician.component.html',
  styleUrl: './electrician.component.scss',
})
export class ElectricianComponent {
  title: string = 'Électricien avancé';

  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];

  services: string[] = [
    'Sécurité électrique',
    "Services d'électricité",
    'Installation électrique',
    'Réparation électrique',
    'Dépannage électrique',
    'Mise aux normes électriques',
    'Électricien certifié',
    'Installation de luminaires',
    'Rénovation électrique',
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
