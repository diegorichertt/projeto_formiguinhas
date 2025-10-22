# Configuração Firebase - Projeto As Formiguinhas

## 📋 Pré-requisitos

1. **Node.js** instalado (versão 16 ou superior)
2. **Conta Google** para acessar o Firebase Console
3. **Projeto Firebase** já criado (formiguinhas090507)

## 🚀 Configuração Inicial

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Firebase Console

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Selecione o projeto `formiguinhas090507`
3. Vá em **Project Settings** (ícone da engrenagem)
4. Na aba **General**, copie as configurações do seu projeto

### 3. Atualizar Configuração Firebase

Edite o arquivo `firebase-config.js` e substitua os valores:

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

### 4. Configurar Authentication

1. No Firebase Console, vá em **Authentication**
2. Clique em **Get Started**
3. Na aba **Sign-in method**, habilite **Email/Password**
4. Crie o primeiro usuário admin:
   - Email: `admin@formiguinhas.com`
   - Senha: `admin123456`

### 5. Configurar Firestore Database

1. No Firebase Console, vá em **Firestore Database**
2. Clique em **Create database**
3. Escolha **Start in test mode** (para desenvolvimento)
4. Selecione uma localização (recomendado: us-central1)

### 6. Configurar Regras de Segurança

No Firestore, vá em **Rules** e configure:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura pública para eventos
    match /events/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Permitir leitura pública para doações (sem dados pessoais)
    match /donations/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Voluntários apenas para admins
    match /volunteers/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Configurações apenas para admins
    match /settings/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento Local

```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:3000`

### Estrutura de Arquivos

```
projeto_formiguinhas/
├── firebase-config.js      # Configuração Firebase
├── firebase-auth.js        # Serviço de autenticação
├── firebase-firestore.js   # Serviço de banco de dados
├── admin-panel.js          # Funcionalidades do painel admin
├── index.js                # Script principal
├── index.html              # Página principal
├── admin-login.html        # Página de login
├── admin-panel.html        # Painel administrativo
├── style.css               # Estilos
└── package.json            # Dependências
```

## 🔧 Funcionalidades Implementadas

### ✅ Autenticação
- Login com email/senha via Firebase Auth
- Gerenciamento de sessão
- Proteção de rotas administrativas

### ✅ Gerenciamento de Eventos
- Adicionar novos eventos
- Listar eventos cadastrados
- Campos: título, descrição, data, local, tipo

### ✅ Controle de Doações
- Registrar doações recebidas
- Relatório de doações
- Campos: tipo, descrição, quantidade, doador, contato

### ✅ Cadastro de Voluntários
- Cadastrar novos voluntários
- Lista de voluntários
- Campos: nome, email, telefone, habilidades, disponibilidade

### ✅ Dashboard Administrativo
- Estatísticas em tempo real
- Contadores de eventos, doações e voluntários

## 🔐 Segurança

- **NUNCA** commite o arquivo `formiguinhas090507-firebase-adminsdk-fbsvc-9992b6ac66.json` no Git
- Use variáveis de ambiente para configurações sensíveis em produção
- Configure regras de segurança adequadas no Firestore
- Implemente validação de dados no frontend e backend

## 📱 Próximos Passos

1. **Deploy**: Configurar hospedagem (Firebase Hosting recomendado)
2. **Backup**: Configurar backup automático do Firestore
3. **Notificações**: Implementar notificações push
4. **Relatórios**: Criar relatórios avançados
5. **API**: Desenvolver API REST para integrações

## 🆘 Suporte

Para dúvidas ou problemas:
- Email: asformiguinhas@gmail.com
- Documentação Firebase: https://firebase.google.com/docs
