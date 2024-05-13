import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionPageComponent } from './confession-page.component';

describe('ConfessionPageComponent', () => {
  let component: ConfessionPageComponent;
  let fixture: ComponentFixture<ConfessionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfessionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfessionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
