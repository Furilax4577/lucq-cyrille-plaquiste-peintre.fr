import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPopinComponent } from './gallery-popin.component';

describe('GalleryPopinComponent', () => {
  let component: GalleryPopinComponent;
  let fixture: ComponentFixture<GalleryPopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryPopinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
