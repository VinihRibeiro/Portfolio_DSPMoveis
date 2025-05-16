import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaControleServicoPageRoutingModule } from './tela-controle-servico-routing.module';

import { TelaControleServicoPage } from './tela-controle-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaControleServicoPageRoutingModule
  ],
  declarations: [TelaControleServicoPage]
})
export class TelaControleServicoPageModule {}
