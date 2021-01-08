import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConfirmeDemandeComponent } from './popup-confirme-demande.component';

describe('PopupConfirmeDemandeComponent', () => {
  let component: PopupConfirmeDemandeComponent;
  let fixture: ComponentFixture<PopupConfirmeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupConfirmeDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConfirmeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
