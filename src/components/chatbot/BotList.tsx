import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import type { Bot } from "../../types/chatbot";
import { X } from "lucide-react";

type Props = {
  bots: Bot[];
  selectedBot: Bot | null;
  onSelect: (bot: Bot) => void;
  onOpenModal: () => void;
  onDelete: (id: number) => void;
};

export default function BotList({ bots, selectedBot, onSelect, onOpenModal, onDelete }: Props) {
  return (
    <Card className="shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      <CardContent className="p-6 flex flex-col h-[500px]">
      <div className="flex items-center gap-4 -mb-7 -mt-20 -ml-7">
        <img src="/BotManager.png" alt="Bot Manager" className="h-44 w-auto" />
        <h2 className="text-2xl font-semibold text-gray-800">Bots disponíveis</h2>
      </div>

        {bots.length === 0 ? (
          <div className="flex flex-col flex-1 justify-center items-center text-center text-gray-500">
            <p className="mb-6">Nenhum bot criado ainda. Crie seu primeiro bot!</p>
            <Button onClick={onOpenModal} className="bg-blue-600 hover:bg-blue-700 text-white">
              Criar Bot
            </Button>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto divide-y divide-gray-200">
           {bots.map((bot) => (
                <li
                key={bot.id}
                className={`flex justify-between items-center group p-3 rounded-md transition-colors ${
                    selectedBot?.id === bot.id
                    ? "bg-blue-100 font-semibold text-blue-800"
                    : "hover:bg-gray-100"
                }`}
                >
                <span
                    onClick={() => onSelect(bot)}
                    className="flex-1 cursor-pointer"
                    title={`Contexto: ${bot.contexto}`}
                >
                    {bot.nome}
                </span>
                <button
                    onClick={() => onDelete(bot.id)}
                    className="text-red-500 p-1 rounded hover:bg-red-100 hidden group-hover:block"
                    title="Excluir bot"
                >
                    <X size={18} />
                </button>
                </li>
            ))}
          </ul>
        )}

        {bots.length > 0 && (
          <Button
            onClick={onOpenModal}
            className="mt-4 bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            Criar novo Bot
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
