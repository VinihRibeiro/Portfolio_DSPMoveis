export interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  data: string;  // ou Date, dependendo do que usar
  concluido: boolean;
}
