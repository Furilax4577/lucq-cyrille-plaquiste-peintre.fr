import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FileSource } from '../../../../../scripts/generate-gallery';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MAT_DIALOG_DATA {
  image: FileSource;
}

@Component({
  selector: 'app-gallery-popin',

  imports: [CommonModule],
  templateUrl: './gallery-popin.component.html',
  styleUrl: './gallery-popin.component.scss',
})
export class GalleryPopinComponent {
  readonly data = inject<MAT_DIALOG_DATA>(MAT_DIALOG_DATA);
}
