import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../models/servico.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tela-controle-servico',
  templateUrl: './tela-controle-servico.page.html',
  styleUrls: ['./tela-controle-servico.page.scss'],
  standalone: false,
})
export class TelaControleServicoPage implements OnInit {

  servicos: Servico[] = [];
  novoServico: Servico = {
  id: 0,
  titulo: '',
  descricao: '',
  data: '',
  concluido: false
};


  constructor(
  private servicoService: ServicoService,
  private navCtrl: NavController
) { }

  async ngOnInit() {
    await this.carregarServicos();
  }

  async carregarServicos() {
    this.servicos = await this.servicoService.listarServicos();
  }

  async adicionarServico() {
    await this.servicoService.inserirServico(this.novoServico);
    this.novoServico = { id: 0, titulo: '', descricao: '', data: '', concluido: false };
    await this.carregarServicos();
  }

  async excluirServico(id: number) {
    await this.servicoService.excluirServico(id);
    await this.carregarServicos();
  }

  logout() {
    this.navCtrl.navigateRoot('/login');
}

}
