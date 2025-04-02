import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSource } from '../../../../scripts/generate-gallery';
import { MatDialog } from '@angular/material/dialog';
import { GalleryPopinComponent } from './gallery-popin/gallery-popin.component';
import { TitleService } from '../../services/title.service';

import images from '../../../../public/images/images.json';
import { BreakcrumbItem } from '../../components/breadcrumb/breadcrumb.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-gallery',

  imports: [CommonModule, BannerComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
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
