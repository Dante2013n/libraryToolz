import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarQRPage } from './generar-qr.page';

describe('GenerarQRPage', () => {
  let component: GenerarQRPage;
  let fixture: ComponentFixture<GenerarQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarQRPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
