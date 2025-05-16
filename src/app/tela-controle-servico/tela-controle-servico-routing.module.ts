import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaControleServicoPage } from './tela-controle-servico.page';

const routes: Routes = [
  {
    path: '',
    component: TelaControleServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaControleServicoPageRoutingModule {}
