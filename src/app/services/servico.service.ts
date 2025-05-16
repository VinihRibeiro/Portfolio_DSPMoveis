import { Injectable } from '@angular/core';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private storageKey = 'servicos';

  constructor() {}

  async listarServicos(): Promise<Servico[]> {
    // Pega dados do localStorage
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  async inserirServico(servico: Servico) {
    const servicos = await this.listarServicos();

    // Gera id simples (timestamp)
    servico.id = new Date().getTime();

    servicos.push(servico);
    localStorage.setItem(this.storageKey, JSON.stringify(servicos));
  }

  async excluirServico(id: number) {
    let servicos = await this.listarServicos();
    servicos = servicos.filter(s => s.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(servicos));
  }
}
