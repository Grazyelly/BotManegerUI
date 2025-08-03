import type { Bot, Mensagem } from "../types/chatbot";
import { api } from "../api/axios";

const listarBots = async (): Promise<Bot[]> => {
  const response = await api.get(`/api/Chatbot`);
  return response.data;
};

const criarBot = async (nome: string, contexto: string): Promise<Bot> => {
  const response = await api.post(`/api/Chatbot`, null, {
    params: { nome, contexto },
  });
  return response.data;
};

const obterMensagens = async (botId: number): Promise<Mensagem[]> => {
  const response = await api.get(`/api/Mensagem/${botId}`);
  return response.data;
};

const enviarMensagem = async (botId: number, mensagem: string): Promise<Mensagem> => {
  const response = await api.post(
    `api/Mensagem/${botId}`,
    JSON.stringify(mensagem),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};

const deletarBot = async (botId: number): Promise<Mensagem[]> => {
  const response = await api.delete(`/api/Chatbot/${botId}`);
  return response.data;
};

export default {
  listarBots,
  criarBot,
  obterMensagens,
  enviarMensagem,
  deletarBot,
};
