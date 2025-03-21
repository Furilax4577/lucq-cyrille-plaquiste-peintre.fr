import { Component, inject } from '@angular/core';
import { BreakcrumbItem } from '../breadcrumb/breadcrumb.component';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';
import { FileSource } from '../../../scripts/gallery-generator';
import { MatDialog } from '@angular/material/dialog';
import { GalleryPopinComponent } from './gallery-popin/gallery-popin.component';
import { TitleService } from '../../services/title.service';

import images from '../../../../public/images/images.json';

@Component({
  selector: 'app-gallery',

  imports: [BannerComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GaleryComponent {
  title: string = 'Galerie photo';
  breakcrumbItems: BreakcrumbItem[] = [
    { label: 'Accueil', url: '/' },
    { label: this.title, url: '' },
  ];

  readonly dialog = inject(MatDialog);

  images: FileSource[] = images;

  openDialog(image: FileSource) {
    const dialogRef = this.dialog.open(GalleryPopinComponent, {
      data: { image },
    });

    // dialogRef.afterClosed().subscribe((result) => {});
  }

  constructor(private titleService: TitleService) {
    this.titleService.setTitle(this.title);
    this.titleService.setKeywords([this.title]);
  }
}
