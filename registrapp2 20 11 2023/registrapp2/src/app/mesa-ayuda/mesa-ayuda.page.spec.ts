import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesaAyudaPage } from './mesa-ayuda.page';

describe('MesaAyudaPage', () => {
  let component: MesaAyudaPage;
  let fixture: ComponentFixture<MesaAyudaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesaAyudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
