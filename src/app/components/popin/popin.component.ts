import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Popin, PopinService } from '../../services/popin.service';

@Component({
  selector: 'app-popin',

  imports: [CommonModule],
  templateUrl: './popin.component.html',
  styleUrl: './popin.component.scss',
})
export class PopinComponent implements OnInit, OnDestroy {
  popin?: Popin;

  subcription?: Subscription;

  constructor(private popinService: PopinService) {}

  ngOnInit(): void {
    this.subcription = this.popinService.popin.subscribe((popin) => {
      this.popin = popin;
    });
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }

  close() {
    this.popinService.close();
  }
}
