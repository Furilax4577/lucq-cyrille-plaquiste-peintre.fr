import { Component } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'LC Création votre expert plaquiste peintre';

  constructor(private titleService: TitleService) {
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords(['plaquiste', 'peintre', 'peinture']);
  }
}
