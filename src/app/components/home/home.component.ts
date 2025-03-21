import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-home',

  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'LC Création votre expert plaquiste peintre';

  constructor(private titleService: TitleService) {
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords([]);
  }
}
