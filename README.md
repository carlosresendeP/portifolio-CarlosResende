# 💼 Portfolio Profissional - Carlos Resende

> **Desenvolvedor Full Stack** especializado em React.js, Node.js e tecnologias modernas

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://carlosresendep.github.io/portifolio-CarlosResende)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple)](https://vitejs.dev/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-6.0-pink)](https://styled-components.com/)

## 🎯 Sobre o Projeto

Este é meu portfolio profissional desenvolvido para apresentar minha jornada como **Desenvolvedor Full Stack**. O projeto demonstra minhas competências técnicas em desenvolvimento frontend moderno, arquitetura de software limpa e experiência do usuário otimizada.

### 🚀 Destaques Técnicos

- **Performance otimizada** com Vite e lazy loading
- **Design System** customizado com Styled Components
- **Formulário inteligente** com validação em tempo real
- **Automação profissional** via webhook n8n para contatos
- **Código limpo** seguindo princípios SOLID e boas práticas
- **Totalmente responsivo** com mobile-first approach

## 📸 Demonstração Visual

### 🖥️ Interface Desktop
<p align="center">
  <img src="./src/assets/project-apresentation/image-desk-1.png" alt="Homepage Desktop" width="100%">
  <br>
  <sub><i>Homepage com hero section e navegação principal</i></sub>
</p>

<p align="center">
  <img src="./src/assets/project-apresentation/image-desk-2.png" alt="Projetos Desktop" width="100%">
  <br>
  <sub><i>Seção de projetos com cards interativos</i></sub>
</p>

<p align="center">
  <img src="./src/assets/project-apresentation/image-desk-3.png" alt="Contato Desktop" width="100%">
  <br>
  <sub><i>Modal de contato com validação em tempo real</i></sub>
</p>

### 📱 Interface Mobile
<p align="center">
  <img src="./src/assets/project-apresentation/image-mobile-1.png" alt="Mobile View 1" width="250">
  <img src="./src/assets/project-apresentation/image-mobile-2.png" alt="Mobile View 2" width="250">
  <img src="./src/assets/project-apresentation/image-mobile-3.png" alt="Mobile View 3" width="250">
  <br>
  <sub><i>Design responsivo otimizado para dispositivos móveis</i></sub>
</p>

## 🛠️ Stack Tecnológica

### Frontend Core
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 18.2.0 | Biblioteca principal para UI |
| **Vite** | 5.0+ | Build tool e dev server |
| **Styled Components** | 6.0+ | CSS-in-JS e Design System |

### Gerenciamento & Formulários
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React Hook Form** | 7.45+ | Gerenciamento performático de forms |
| **React Icons** | 4.11+ | Biblioteca de ícones otimizada |

### Automação & Integração
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **n8n** | Latest | Automação de workflows |
| **Webhook API** | REST | Processamento de contatos |

| **n8n** | Latest | Automação de workflows |
| **Webhook API** | REST | Processamento de contatos |

## 🏗️ Arquitetura do Projeto

```
src/
├── 📁 components/              # Componentes reutilizáveis
│   ├── 🎯 UI/                 # Design System
│   │   └── Button/            # Componente base de botão
│   ├── 🧭 Header/             # Navegação principal
│   ├── 📋 ContactModal/       # Modal de contato profissional
│   └── 🎪 CTA/               # Call-to-action sections
├── 📄 pages/                  # Páginas da aplicação
│   ├── 🏠 Home/              # Landing page com hero
│   ├── 👤 About/             # Sobre mim e experiência
│   ├── 💼 Projects/          # Portfolio de projetos
│   ├── 🛠️ Skills/            # Competências técnicas
│   ├── ❓ FAQ/               # Perguntas frequentes
│   └── 🔄 WorkFlows/         # Processo de trabalho
├── 🎣 hooks/                  # Custom hooks
│   └── useContactModal.js     # Lógica do modal de contato
├── 🎨 styles/                 # Sistema de design
│   ├── theme.js              # Tokens de design
│   └── GlobalStyles.js       # Reset e estilos base
└── 📦 assets/                 # Recursos estáticos
    └── project-apresentation/ # Screenshots do projeto
```

### 🎯 Padrões Arquiteturais Aplicados

- **Component Composition**: Componentes pequenos e reutilizáveis
- **Custom Hooks**: Lógica compartilhada encapsulada
- **Design Tokens**: Sistema de cores e espaçamentos consistente
- **Separation of Concerns**: Estilos separados da lógica
- **Performance First**: Lazy loading e otimizações de bundle

- **Performance First**: Lazy loading e otimizações de bundle

## ⚡ Quick Start

### 📋 Pré-requisitos

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 ou **yarn** >= 1.22.0
- **Git** para controle de versão

### 🚀 Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/carlosresendeP/portifolio-CarlosResende.git
cd portifolio-CarlosResende

# 2. Instale as dependências
npm install

# 3. Configure o ambiente (veja seção abaixo)
cp .env.example .env

# 4. Execute em desenvolvimento
npm run dev
```

### 🔧 Configuração do Ambiente

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```env
# Webhook n8n para formulário de contato
VITE_URL_N8N=https://seu-dominio-n8n.com/webhook/contact

# Para desenvolvimento local
# VITE_URL_N8N=http://localhost:5678/webhook/contact
```

> **⚠️ Importante**: Substitua `https://seu-dominio-n8n.com/webhook/contact` pela URL real do seu webhook n8n.

### 📦 Scripts Disponíveis

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `npm run dev` | Inicia servidor de desenvolvimento | Desenvolvimento local |
| `npm run build` | Gera build otimizado para produção | Deploy |
| `npm run preview` | Visualiza build de produção | Teste local do build |
| `npm run lint` | Executa verificação de código | Qualidade de código |

| `npm run lint` | Executa verificação de código | Qualidade de código |

## 🎨 Funcionalidades Principais

### 🏠 **Homepage Impactante**
- **Hero Section** com animação typewriter personalizada
- **Navegação suave** entre seções com âncoras otimizadas
- **CTA estratégicos** posicionados para conversão

### 💼 **Portfolio Interativo**
- **Cards de projeto** com hover effects e transições
- **Modal de detalhes** para cada projeto
- **Filtros por tecnologia** (em desenvolvimento)

### 📞 **Sistema de Contato Profissional**
- **Formulário validado** em tempo real com React Hook Form
- **Integração n8n** para automação de emails
- **Feedback visual** de sucesso/erro para o usuário
- **Proteção anti-spam** e validação de campos

### 📱 **Design Responsivo Avançado**
- **Mobile-first approach** com breakpoints específicos
- **Menu hamburger** animado para dispositivos móveis
- **Imagens otimizadas** para diferentes resoluções
- **Performance otimizada** em todas as telas

## 🔧 Configuração Avançada do n8n

> **Para desenvolvedores que desejam implementar o sistema de contato completo**

### 1️⃣ Instalação do n8n

```bash
# Instalação global
npm install -g n8n

# Ou via Docker (recomendado para produção)
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  n8nio/n8n
```

### 2️⃣ Configuração do Webhook

1. **Acesse** `http://localhost:5678`
2. **Crie um novo workflow**
3. **Adicione um nó Webhook** como trigger
4. **Configure o endpoint**: `/webhook/contact`
5. **Adicione processamento**: Email, Database, etc.

### 3️⃣ Estrutura de Response Esperada

```json
{
  "success": true,
  "message": "Dados recebidos com sucesso",
  "data": {
    "id": "contact_123",
    "timestamp": "2024-01-01T12:00:00Z"
  }
}
```
<th>Comando</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>npm run dev</code></td>
<td>Inicia o servidor de desenvolvimento</td>
</tr>
<tr>
<td><code>npm run build</code></td>
<td>Gera build de produção</td>
</tr>
<tr>
<td><code>npm run preview</code></td>
<td>Visualiza o build de produção</td>
</tr>
<tr>
<td><code>npm run lint</code></td>
<td>Executa verificação de código</td>
</tr>
</tbody>
</table>

<h2>📱 Responsividade</h2>

<p>O projeto é totalmente responsivo com breakpoints configurados para:</p>

<ul>
  <li><strong>Mobile:</strong> até 480px</li>
  <li><strong>Tablet:</strong> 481px - 768px</li>
  <li><strong>Desktop:</strong> acima de 768px</li>
</ul>

<h2>🎨 Personalização</h2>

<p>Para personalizar as cores e temas, edite o arquivo <code>src/styles/theme.js</code>:</p>

<pre><code>export const theme = {
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
    background: '#your-color',
    // ... outras cores
  },
  // ... outras configurações
};</code></pre>

```

## 🚀 Performance & Otimizações

### ⚡ Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Bundle Size**: Otimizado com code splitting
- **Lighthouse Score**: 95+ em todas as métricas

### 🔧 Otimizações Implementadas
- **Lazy Loading** de componentes e imagens
- **Tree Shaking** para eliminar código não usado
- **Minificação** automática de CSS e JS
- **Compressão** de assets estáticos
- **Cache Strategy** para recursos

## 📊 Responsividade Profissional

| Dispositivo | Breakpoint | Otimizações |
|-------------|------------|-------------|
| **Mobile** | `< 480px` | Menu hamburger, layout stack |
| **Tablet** | `481px - 768px` | Grid adaptado, espaçamentos otimizados |
| **Desktop** | `> 768px` | Layout completo, hover effects |

## 💡 Próximas Funcionalidades

- [ ] **Dark/Light Mode** toggle
- [ ] **Filtros de projeto** por tecnologia
- [ ] **Blog** integrado com CMS
- [ ] **Testes automatizados** com Vitest
- [ ] **PWA** com service workers
- [ ] **Internacionalização** (i18n)

## 🔗 Links Importantes

| Recurso | Link |
|---------|------|
| **🌐 Demo Live** | [carlosresendep.github.io](https://carlosresendep.github.io/portifolio-CarlosResende) |
| **📂 Repositório** | [GitHub](https://github.com/carlosresendeP/portifolio-CarlosResende) |
| **📧 Contato** | [Email](mailto:carlos.resende.dev@gmail.com) |
| **💼 LinkedIn** | [LinkedIn](https://linkedin.com/in/carlosresendep) |

## 🎯 Sobre o Desenvolvedor

**Carlos Resende** - *Desenvolvedor Full Stack*

Especialista em desenvolvimento frontend moderno com React.js, focado em criar experiências digitais excepcionais. Apaixonado por código limpo, performance e user experience.

### 🛠️ Stack Principal
- **Frontend**: React, TypeScript, Styled Components
- **Backend**: Node.js, Express, PostgreSQL
- **DevOps**: Docker, AWS, GitHub Actions
- **Tools**: Vite, ESLint, Prettier, Figma

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

[![GitHub stars](https://img.shields.io/github/stars/carlosresendeP/portifolio-CarlosResende?style=social)](https://github.com/carlosresendeP/portifolio-CarlosResende/stargazers)

</div>

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/carlosresendeP">Carlos Resende</a></sub>
</div>
