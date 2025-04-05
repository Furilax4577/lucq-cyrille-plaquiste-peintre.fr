import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { BannerComponent } from '../../components/banner/banner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [BannerComponent, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  title: string = 'Services sur mesure';
  breakcrumbItems = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];

  constructor(private titleService: TitleService) {
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords([
      'services',
      'peinture',
      'peintre',
      'électricien',
      'électricité',
      'plaquiste',
      'plaquisterie',
      'platrier',
      'platrerie',
      'carrelage',
      'carreleur',
    ]);
  }
}
