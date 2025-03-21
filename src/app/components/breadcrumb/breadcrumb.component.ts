import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface BreakcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb[breakcrumbItems]',

  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  @Input() breakcrumbItems!: BreakcrumbItem[];
}
