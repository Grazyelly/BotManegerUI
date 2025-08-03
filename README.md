# 🤖 Chatbot Manager

Gerenciador de múltiplos bots com contexto customizado, construído com React + TypeScript. Permite criar bots, enviar mensagens e manter histórico de conversas, com backend conectado via API REST.

---

## 📁 Estrutura de Pastas

src/
├── components/
│ ├── chatbot/ # Componentes principais do Chatbot
│ │ ├── BotList.tsx
│ │ ├── ChatWindow.tsx
│ │ ├── MessageList.tsx
│ │ ├── MessageForm.tsx
│ │ └── CreateBotModal.tsx
│ └── ui/ # Componentes reutilizáveis (UI)
│ ├── button.tsx
│ ├── card.tsx
│ └── input.tsx
├── hooks/
│ └── useChatbot.ts # Lógica central da aplicação (custom hook)
├── services/
│ └── chatbotService.ts # Comunicação com API
├── types/
│ └── chatbot.d.ts # Tipagens de Bot e Mensagem
├── pages/
│ └── ChatbotPage.tsx # Página principal
├── lib/
│ └── utils.ts # Funções utilitárias
├── App.tsx # Root da aplicação React
├── main.tsx # Entry point do React DOM
└── index.css # Estilos globais

---

## 🧠 Como funciona

- **Criação de Bots:** Você define o nome e contexto do bot (ex: "Você é um bot que responde como um filósofo").
- **Envio de mensagens:** As mensagens são enviadas para o backend que processa e responde com base no contexto do bot.
- **Histórico:** Cada bot tem seu próprio histórico de conversa.
- **UI responsiva:** Interface amigável com suporte para desktop e mobile.

---

## ⚙️ Tecnologias

- React  
- TypeScript  
- Axios  
- Tailwind CSS  

---

## 🚀 Como rodar localmente

## 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/chatbot-manager.git
cd chatbot-manager
```

## 2.Instale as dependências:

```bash
npm install
# ou
yarn install
```pro
## 3. Configure o backend (API) Projeto backend e documentação no link a baixo
⚠️ A API deve estar rodando em: https://localhost:7076
Verifique se os endpoints /api/Chatbot e /api/Mensagem/{id} estão disponíveis.

Inicie o frontend:

```bash
npm run dev
# ou
yarn dev
A aplicação estará disponível em: http://localhost:5173
```

# 📝 Licença
Este projeto é licenciado sob a MIT License.
