import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaControleServicoPage } from './tela-controle-servico.page';

describe('TelaControleServicoPage', () => {
  let component: TelaControleServicoPage;
  let fixture: ComponentFixture<TelaControleServicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaControleServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
