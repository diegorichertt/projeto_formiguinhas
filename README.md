# As Formiguinhas - React App

Sistema de gerenciamento para o grupo As Formiguinhas, desenvolvido com React e Firebase.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para interface de usuário
- **React Router** - Roteamento de páginas
- **Firebase** - Backend como serviço (Auth + Firestore)
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização com variáveis CSS

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx       # Cabeçalho da aplicação
│   ├── Footer.jsx       # Rodapé da aplicação
│   ├── Modal.jsx        # Modal genérico
│   ├── EventForm.jsx    # Formulário de eventos
│   ├── DonationForm.jsx # Formulário de doações
│   ├── VolunteerForm.jsx # Formulário de voluntários
│   └── StatsCard.jsx    # Card de estatísticas
├── contexts/            # Contextos React
│   └── AuthContext.jsx  # Contexto de autenticação
├── firebase/            # Configuração Firebase
│   ├── config.js        # Configuração do Firebase
│   ├── auth.js          # Serviços de autenticação
│   └── firestore.js     # Serviços do Firestore
├── pages/               # Páginas da aplicação
│   ├── Home.jsx         # Página inicial
│   ├── AdminLogin.jsx   # Página de login admin
│   └── AdminPanel.jsx   # Painel administrativo
├── App.jsx              # Componente principal
├── main.jsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🛠️ Instalação e Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Selecione o projeto `formiguinhas090507`
3. Vá em **Project Settings** → **General**
4. Copie as configurações do seu projeto

### 3. Atualizar Configuração Firebase

Edite o arquivo `src/firebase/config.js`:

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY_AQUI",
    authDomain: "formiguinhas090507.firebaseapp.com",
    projectId: "formiguinhas090507",
    storageBucket: "formiguinhas090507.appspot.com",
    messagingSenderId: "113516121522543069771",
    appId: "SEU_APP_ID_AQUI"
};
```

### 4. Configurar Firebase Services

#### Authentication
1. No Firebase Console, vá em **Authentication**
2. Habilite **Email/Password**
3. Crie o primeiro usuário admin

#### Firestore Database
1. Vá em **Firestore Database**
2. Crie o banco em modo de teste
3. Configure as regras de segurança:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /events/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /donations/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /volunteers/{document} {
      allow read, write: if request.auth != null;
    }
    match /settings/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 🔧 Funcionalidades

### ✅ Página Inicial
- Hero section com call-to-action
- Seção "Quem Somos"
- Cards de eventos
- Informações de contato
- Navegação suave entre seções

### ✅ Autenticação
- Login com email/senha
- Proteção de rotas administrativas
- Gerenciamento de sessão
- Logout automático

### ✅ Painel Administrativo
- Dashboard com estatísticas em tempo real
- **Gerenciamento de Eventos:**
  - Adicionar novos eventos
  - Listar eventos cadastrados
  - Campos: título, descrição, data, local, tipo

- **Controle de Doações:**
  - Registrar doações recebidas
  - Relatório de doações
  - Campos: tipo, descrição, quantidade, doador, contato

- **Cadastro de Voluntários:**
  - Cadastrar novos voluntários
  - Lista de voluntários
  - Campos: nome, email, telefone, habilidades, disponibilidade

### ✅ Interface Moderna
- Design responsivo
- Modais para formulários
- Feedback visual
- Navegação intuitiva

## 🎨 Design System

### Cores
- **Primária:** `#D5422F` (Vermelho/Alaranjado)
- **Secundária:** `#297FA6` (Azul)
- **Fundo:** `#FBE8B2` (Bege claro)
- **Texto:** `#000000` (Preto)
- **Detalhe:** `#3E7C56` (Verde)
- **Extra:** `#B55A2B` (Marrom)

### Componentes
- Botões com estados hover
- Cards com sombras sutis
- Formulários com validação
- Modais responsivos
- Grid layouts adaptativos

## 🔐 Segurança

- Autenticação obrigatória para área admin
- Validação de dados no frontend
- Regras de segurança no Firestore
- Proteção contra XSS
- Sanitização de inputs

## 📱 Responsividade

- Design mobile-first
- Breakpoints para tablet e desktop
- Navegação adaptativa
- Grid responsivo
- Imagens otimizadas

## 🚀 Deploy

### Firebase Hosting (Recomendado)

1. Instale o Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Faça login:
```bash
firebase login
```

3. Inicialize o projeto:
```bash
firebase init hosting
```

4. Configure o build:
```bash
npm run build
firebase deploy
```

### Outras Opções
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔄 Migração do HTML

Este projeto foi migrado de HTML puro para React, mantendo:
- ✅ Toda a funcionalidade original
- ✅ Design e estilos idênticos
- ✅ Integração com Firebase
- ✅ Responsividade
- ✅ Performance melhorada

## 🆘 Suporte

Para dúvidas ou problemas:
- Email: asformiguinhas@gmail.com
- Documentação React: https://react.dev/
- Documentação Firebase: https://firebase.google.com/docs

## 📄 Licença

MIT License - Veja o arquivo LICENSE para detalhes.
