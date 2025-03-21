import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',

  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  portableNumber: string = '0619030115';
  whatsAppNumber: string = '33619030115';

  getInternationnalNumber(number: string): string {
    const regex = /^0/;
    return `tel:${number.replace(regex, '+33')}`;
  }
}
