import React from "react";
import type  { Bot, Mensagem } from "../../types/chatbot";

type Props = {
  historico: Mensagem[];
  selectedBot: Bot;
  chatEndRef: React.RefObject<HTMLDivElement | null>;
};

export default function MessageList({ historico, selectedBot, chatEndRef }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {historico.length === 0 && (
        <p className="text-gray-500 text-center mt-8">Nenhuma mensagem enviada ainda.</p>
      )}
      {historico.map((msg) => (
        <div key={msg.id} className="max-w-xl">
          <div className="mb-1 text-sm text-gray-500">
            {new Date(msg.dataHora).toLocaleString()}
          </div>
          <div className="flex flex-col gap-1">
            <div className="self-end bg-blue-600 text-white px-4 py-2 rounded-lg max-w-[70%]">
              <span className="font-medium">Você:</span> {msg.textoUsuario}
            </div>
            <div className="self-start bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-[70%]">
              <span className="font-medium">{selectedBot.nome}:</span> {msg.respostaBot}
            </div>
          </div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}
