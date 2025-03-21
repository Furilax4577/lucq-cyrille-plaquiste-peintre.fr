import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlastererComponent } from './plasterer.component';

describe('PlastererComponent', () => {
  let component: PlastererComponent;
  let fixture: ComponentFixture<PlastererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlastererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlastererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
