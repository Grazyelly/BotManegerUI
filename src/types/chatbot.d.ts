export interface Bot {
  id: number;
  nome: string;
  contexto: string;
}

export interface Mensagem {
  id: number;
  textoUsuario: string;
  respostaBot: string;
  dataHora: string;
}
