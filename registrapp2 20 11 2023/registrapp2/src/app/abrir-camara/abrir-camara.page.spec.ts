import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbrirCamaraPage } from './abrir-camara.page';

describe('AbrirCamaraPage', () => {
  let component: AbrirCamaraPage;
  let fixture: ComponentFixture<AbrirCamaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbrirCamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
