import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { BannerComponent } from '../banner/banner.component';
import { BreakcrumbItem } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-testimonies',

  imports: [BannerComponent],
  templateUrl: './testimonies.component.html',
  styleUrl: './testimonies.component.scss',
})
export class TestimoniesComponent {
  title: string = 'Témoignages';
  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];

  constructor(
    private titleService: TitleService // private httpClient: HttpClient
  ) {
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords([this.title]);
    // this.httpClient
    //   .get(
    //     'https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews'
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
}
