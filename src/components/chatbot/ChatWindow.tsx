import { useEffect, useRef } from "react";
import BotList from "./BotList";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import CreateBotModal from "./CreateBotModal";
import useChatbot from "../../hooks/useChatbot";

export default function ChatWindow() {
  const {
    bots,
    selectedBot,
    historico,
    mensagem,
    modalAberto,
    nome,
    contexto,
    setMensagem,
    setModalAberto,
    setNome,
    setContexto,
    selecionarBot,
    enviarMensagem,
    criarBot,
    deletarBot,
    isEnviando,
  } = useChatbot();

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [historico]);

  console.log(isEnviando);
  return (
    <div className="min-h-screen p-6 flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
      <aside className="md:w-1/3 space-y-6">
        <BotList
          bots={bots}
          selectedBot={selectedBot}
          onSelect={selecionarBot}
          onOpenModal={() => setModalAberto(true)}
          onDelete={deletarBot}
        />
      </aside>

      <main className="md:flex-1 flex flex-col h-[80vh] shadow-lg rounded-lg border border-gray-200 bg-white">
        {selectedBot ? (
          <>
            <header className="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
              <h2 className="text-xl font-semibold text-gray-900">
                Conversa com {selectedBot.nome}
              </h2>
            </header>
            <MessageList historico={historico} selectedBot={selectedBot} chatEndRef={chatEndRef} />
            <MessageForm
              mensagem={mensagem}
              setMensagem={setMensagem}
              onSubmit={enviarMensagem}
              isEnviando={isEnviando}
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-lg">
            Selecione um bot para iniciar a conversa.
          </div>
        )}
      </main>

      {modalAberto && (
        <CreateBotModal
          nome={nome}
          contexto={contexto}
          setNome={setNome}
          setContexto={setContexto}
          onClose={() => setModalAberto(false)}
          onCreate={criarBot}
        />
      )}
    </div>
  );
}
