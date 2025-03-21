import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface Link {
  label: string;
  url: string;
}

@Component({
  selector: 'app-header',

  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isActive = false;
  faBars = faBars;
  faXmark = faXmark;

  links: Link[] = [
    {
      label: 'Accueil',
      url: '/',
    },
    {
      label: 'Services',
      url: '/services',
    },
    {
      label: 'Galerie',
      url: '/galerie',
    },
    {
      label: 'Témoignages',
      url: '/temoignages',
    },
    {
      label: 'Contactez-moi',
      url: '/contactez-moi',
    },
  ];

  toggleMenu() {
    this.isActive = !this.isActive;
  }
  openMenu() {
    this.isActive = true;
  }
  closeMenu() {
    this.isActive = false;
  }
}
