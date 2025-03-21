import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Popin {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PopinService {
  readonly popin: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  open(popin: Popin) {
    this.popin.next(popin)
  }

  close() {
    this.popin.next(null)
  }
}
