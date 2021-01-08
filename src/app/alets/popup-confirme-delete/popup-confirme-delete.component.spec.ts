import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfirmeDeleteComponent } from './popup-confirme-delete.component';

describe('PopupConfirmeDeleteComponent', () => {
  let component: PopupConfirmeDeleteComponent;
  let fixture: ComponentFixture<PopupConfirmeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupConfirmeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConfirmeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
