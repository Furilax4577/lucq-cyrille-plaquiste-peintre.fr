import { MailService } from '../../services/mail.service';
import { PopinService } from '../../services/popin.service';
import { TitleService } from '../../services/title.service';
import { EmailValidator } from '../../validators/email.validator';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../components/banner/banner.component';
import { BreakcrumbItem } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, BannerComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  title: string = 'Contactez-moi';
  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];
  portableNumber: string = '0619030115';
  whatsAppNumber: string = '33619030115';
  form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, EmailValidator()]),
    message: new FormControl('', Validators.required),
  });

  constructor(
    private mailService: MailService,
    private popinService: PopinService,
    private titleService: TitleService
  ) {
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords([this.title]);
    this.form.disable();
  }

  isInvalid(formControlName: string) {
    const formControl = this.form.get(formControlName);
    return formControl?.invalid && formControl.dirty;
  }

  getInternationnalNumber(number: string): string {
    const regex = /^0/;
    return `tel:${number.replace(regex, '+33')}`;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.mailService
      .sendMail({
        name: this.form.get('fullName')!.value!,
        phone: this.form.get('phoneNumber')!.value!,
        address: this.form.get('email')!.value!,
        message: this.form.get('message')!.value!,
      })
      .subscribe({
        next: () => {
          this.form.reset();
          this.popinService.open({
            content:
              'Nous allons vous recontacter afin de prendre rendez-vous, à très bientôt !',
            title: 'Message envoyé',
          });
        },
        error: (err) => {
          this.popinService.open({
            content:
              "Oups, il semblerait que le message n'arrive pas à trouver son chemin, veuillez réessayer plus tard !",
            title: 'Erreur',
          });
        },
      });
  }
}
