import { useEffect, useState } from "react";
import type { Bot, Mensagem } from "../types/chatbot";
import chatbotService from "../services/chatbotService";

export default function useChatbot() {
    const [bots, setBots] = useState<Bot[]>([]);
    const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
    const [mensagem, setMensagem] = useState("");
    const [historico, setHistorico] = useState<Mensagem[]>([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [nome, setNome] = useState("");
    const [contexto, setContexto] = useState("");
    const [isEnviando, setIsEnviando] = useState(false);

    useEffect(() => {
        chatbotService.listarBots().then(setBots);
    }, []);

    const criarBot = () => {
        if (!nome.trim() || !contexto.trim()) return;
        chatbotService.criarBot(nome, contexto).then((novoBot) => {
            setBots((prev) => [...prev, novoBot]);
            setNome("");
            setContexto("");
            setModalAberto(false);
        });
    };

    const deletarBot = async (botId: number) => {
        await chatbotService.deletarBot(botId);
        const novaLista = bots.filter(bot => bot.id !== botId);
        setBots(novaLista);
        setSelectedBot(null);      
        setHistorico([]);         
        setMensagem(""); 
    };

    const selecionarBot = (bot: Bot) => {
        setSelectedBot(bot);
        chatbotService.obterMensagens(bot.id).then(setHistorico);
    };

    const enviarMensagem = () => {
        if (!mensagem.trim() || !selectedBot) return;
        setIsEnviando(true);
        chatbotService.enviarMensagem(selectedBot.id, mensagem).then((novaMensagem) => {
              
            setHistorico((prev) => [...prev, novaMensagem]);
            setMensagem("");
            setIsEnviando(false);
        });
    };

    return {
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
        criarBot,
        setBots,
        selecionarBot,
        enviarMensagem,
        deletarBot,
        isEnviando,
    };
}
