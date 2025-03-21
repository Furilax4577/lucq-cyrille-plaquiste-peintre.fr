import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SendEmailData {
  name: string;
  address: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private httpClient: HttpClient) {}

  sendMail(data: SendEmailData) {
    return this.httpClient.post<any>('/api', data);
  }
}
