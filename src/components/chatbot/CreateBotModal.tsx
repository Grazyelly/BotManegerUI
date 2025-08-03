import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  nome: string;
  contexto: string;
  setNome: (value: string) => void;
  setContexto: (value: string) => void;
  onClose: () => void;
  onCreate: () => void;
};

export default function CreateBotModal({
  nome,
  contexto,
  setNome,
  setContexto,
  onClose,
  onCreate,
}: Props) {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 max-w-full p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Criar novo Bot</h2>
        <Input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="mb-3"
        />
        <Input
          placeholder="Contexto"
          value={contexto}
          onChange={(e) => setContexto(e.target.value)}
          className="mb-4"
        />
        <div className="flex justify-end gap-3">
          <Button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-700">
            Cancelar
          </Button>
          <Button
            onClick={onCreate}
            disabled={!nome.trim() || !contexto.trim()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Criar
          </Button>
        </div>
      </div>
    </div>
  );
}
