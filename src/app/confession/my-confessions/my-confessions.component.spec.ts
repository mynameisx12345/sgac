import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConfessionsComponent } from './my-confessions.component';

describe('MyConfessionsComponent', () => {
  let component: MyConfessionsComponent;
  let fixture: ComponentFixture<MyConfessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyConfessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyConfessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
