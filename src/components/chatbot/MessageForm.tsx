import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  mensagem: string;
  setMensagem: (value: string) => void;
  onSubmit: () => void;
  isEnviando: boolean;
};
export default function MessageForm({ mensagem, setMensagem, onSubmit, isEnviando }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg flex gap-3"
    >
      <Input
        placeholder="Digite sua mensagem..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        autoFocus
        className="flex-1"
      />
      <Button
        type="submit"
        disabled={!mensagem.trim() || isEnviando}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Enviar
      </Button>
    </form>
  );
}
