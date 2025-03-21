import { Component, Input } from '@angular/core';
import {
  BreadcrumbComponent,
  BreakcrumbItem,
} from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-banner[title][breakcrumbItems]',
  imports: [BreadcrumbComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() title!: string;
  @Input() breakcrumbItems!: BreakcrumbItem[];
}
