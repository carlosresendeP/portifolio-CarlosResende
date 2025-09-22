<h1>🎯 Novo Portfólio</h1>

<p>Um portfólio pessoal moderno criado com as mais recentes tecnologias web, apresentando minhas habilidades e projetos de forma elegante e responsiva.</p>

<h2>🚀 Tecnologias Utilizadas</h2>

<ul>
  <li><strong>Vite</strong> - Build tool rápido e moderno para desenvolvimento</li>
  <li><strong>React 18</strong> - Biblioteca JavaScript para criação de interfaces</li>
  <li><strong>React Router</strong> - Sistema de roteamento para SPAs (nova versão)</li>
  <li><strong>Styled Components</strong> - CSS-in-JS para estilização componentizada</li>
  <li><strong>React Icons</strong> - Biblioteca completa de ícones para React</li>
  <li><strong>React Hook Form</strong> - Biblioteca para gerenciamento de formulários</li>
  <li><strong>n8n Integration</strong> - Automação de workflows para formulário de contato</li>
</ul>

<h2>📁 Estrutura do Projeto</h2>

<pre>
<code>
src/
├── components/           # Componentes reutilizáveis
│   ├── Header/          # Componente de navegação
│   │   ├── Header.jsx
│   │   └── Header.styled.js
│   └── UI/              # Componentes de interface
├── pages/               # Páginas da aplicação
│   ├── Home/           # Página inicial
│   │   ├── Home.jsx
│   │   └── Home.styled.js
│   ├── About/          # Página sobre
│   │   ├── About.jsx
│   │   └── About.styles.js
│   ├── Projects/       # Página de projetos
│   └── Contact/        # Página de contato
│       ├── Contact.jsx
│       └── Contact.styled.js
├── styles/             # Estilos globais e temas
│   ├── themes.js       # Sistema de cores e breakpoints
│   └── GlobalStyle.js  # Reset CSS e estilos globais
├── assets/             # Imagens e recursos estáticos
│   └── person.png      # Foto do perfil
├── App.jsx             # Componente principal da aplicação
└── main.jsx            # Ponto de entrada (root)
</code>
</pre>

<h2>🛠️ Como Executar</h2>

<ol>
  <li>
    <strong>Clonar o repositório:</strong>
    <pre><code>git clone [url-do-repositorio]
cd novo-potifolio</code></pre>
  </li>
  
  <li>
    <strong>Instalar dependências:</strong>
    <pre><code>npm install</code></pre>
  </li>

  <li>
    <strong>Configurar variáveis de ambiente:</strong>
    <p>Crie um arquivo <code>.env</code> na raiz do projeto com as seguintes variáveis:</p>
    <pre><code># .env.example
# URL do webhook n8n para envio de formulários de contato
VITE_URL_N8N=https://seu-webhook-n8n.com/webhook/contact

# Exemplo de desenvolvimento local (opcional)
# VITE_URL_N8N=http://localhost:5678/webhook/contact</code></pre>
    <p><strong>Nota:</strong> Substitua <code>https://seu-webhook-n8n.com/webhook/contact</code> pela URL real do seu webhook n8n.</p>
  </li>

  <li>
    <strong>Executar em modo desenvolvimento:</strong>
    <pre><code>npm run dev</code></pre>
  </li>

  <li>
    <strong>Build para produção:</strong>
    <pre><code>npm run build</code></pre>
  </li>

  <li>
    <strong>Preview do build:</strong>
    <pre><code>npm run preview</code></pre>
  </li>
</ol>

<h2>📄 Seções Disponíveis</h2>

<ul>
  <li><strong>Home</strong> - Apresentação inicial com animação de digitação</li>
  <li><strong>Sobre Mim</strong> - Informações pessoais, experiência e habilidades</li>
  <li><strong>Workflow</strong> - Processo de trabalho e metodologias</li>
  <li><strong>Projetos</strong> - Portfólio de projetos desenvolvidos</li>
  <li><strong>Skills</strong> - Tecnologias e ferramentas dominadas</li>
  <li><strong>FAQ</strong> - Perguntas frequentes</li>
  <li><strong>Contato</strong> - Informações de contato e redes sociais</li>
</ul>

<h2>🔧 Configuração do n8n (Opcional)</h2>

<p>O formulário de contato está integrado com n8n para automação de workflows. Para configurar:</p>

<ol>
  <li><strong>Instale o n8n:</strong>
    <pre><code>npm install -g n8n</code></pre>
  </li>
  
  <li><strong>Inicie o n8n:</strong>
    <pre><code>n8n start</code></pre>
  </li>
  
  <li><strong>Crie um workflow com webhook:</strong>
    <ul>
      <li>Acesse <code>http://localhost:5678</code></li>
      <li>Crie um novo workflow</li>
      <li>Adicione um nó "Webhook" como trigger</li>
      <li>Configure o endpoint (ex: <code>/webhook/contact</code>)</li>
      <li>Adicione nós para processar os dados (email, banco de dados, etc.)</li>
    </ul>
  </li>
  
  <li><strong>Configure a URL no .env:</strong>
    <pre><code>VITE_URL_N8N=http://localhost:5678/webhook/contact</code></pre>
  </li>
</ol>

<p><strong>Exemplo de resposta esperada do webhook:</strong></p>
<pre><code>{
  "success": true,
  "message": "Dados recebidos com sucesso"
}</code></pre>

<h2>📁 Estrutura do Projeto</h2>

<pre><code>src/
├── components/
│   ├── UI/
│   │   └── Button/           # Componente de botão reutilizável
│   ├── Header/               # Cabeçalho com navegação
│   ├── ContactModal/         # Modal de contato
│   └── CTA/                  # Call-to-action
├── pages/
│   ├── Home/                 # Página inicial
│   ├── About/                # Sobre mim
│   ├── Projects/             # Portfólio
│   ├── Skills/               # Habilidades
│   ├── FAQ/                  # Perguntas frequentes
│   └── WorkFlows/            # Processo de trabalho
├── hooks/
│   └── useContactModal.js    # Hook para modal de contato
├── styles/
│   ├── theme.js              # Configurações do tema
│   └── GlobalStyles.js       # Estilos globais
└── assets/                   # Imagens e recursos estáticos
</code></pre>

<h2>🛠️ Comandos Disponíveis</h2>

<table>
<thead>
<tr>
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

<h2>🤝 Contribuição</h2>

<ol>
  <li>Faça um fork do projeto</li>
  <li>Crie uma branch para sua feature (<code>git checkout -b feature/nova-feature</code>)</li>
  <li>Commit suas mudanças (<code>git commit -m 'Adiciona nova feature'</code>)</li>
  <li>Push para a branch (<code>git push origin feature/nova-feature</code>)</li>
  <li>Abra um Pull Request</li>
</ol>

<h2>📝 Licença</h2>

<p>Este projeto está sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais detalhes.</p>

<hr>

<p align="center">Desenvolvido com ❤️ usando React + Vite + Styled Components</p>

<h2>🎨 Características Principais</h2>

<ul>
  <li>✅ <strong>Design Responsivo</strong> - Adaptável para desktop, tablet e mobile</li>
  <li>✅ <strong>Navegação Suave</strong> - Scroll suave entre seções da página</li>
  <li>✅ <strong>Menu Mobile</strong> - Menu hambúrguer para dispositivos móveis</li>
  <li>✅ <strong>Animação Typewriter</strong> - Efeito de máquina de escrever na home</li>
  <li>✅ <strong>Formulário de Contato</strong> - Modal interativo com validação e integração n8n</li>
  <li>✅ <strong>React Hook Form</strong> - Gerenciamento otimizado de formulários</li>
  <li>✅ <strong>Tema Consistente</strong> - Sistema de cores e breakpoints padronizados</li>
  <li>✅ <strong>Componentes Estilizados</strong> - CSS-in-JS com Styled Components</li>
  <li>✅ <strong>Código Limpo</strong> - Separação de responsabilidades e boas práticas</li>
</ul>

<h3>Imagens do Projeto</h3>

<h4>Desktop</h4>
<p>
  <img src="./src/assets/project-apresentation/image-desk-1.png" alt="Desktop View 1">
  <img src="./src/assets/project-apresentation/image-desk-2.png" alt="Desktop View 2">
  <img src="./src/assets/project-apresentation/image-desk-3.png" alt="Desktop View 3">
</p>

<h4>Tablet</h4>
<p>
  <img src="./src/assets/project-apresentation/image-tablet-1.png" width="400" alt="Tablet View 1">
  <img src="./src/assets/project-apresentation/image-tablet-2.png" width="400" alt="Tablet View 2">
</p>

<h4>Mobile</h4>
<p>
  <img src="./src/assets/project-apresentation/image-mobile-1.png" width="200" alt="Mobile View 1">
  <img src="./src/assets/project-apresentation/image-mobile-2.png" width="200" alt="Mobile View 2">
  <img src="./src/assets/project-apresentation/image-mobile-3.png" width="200" alt="Mobile View 3">
</p>

<h2>🌐 Acesso Local</h2>

<p>Após executar o comando <code>npm run dev</code>, o projeto estará disponível em:</p>
<p><strong>URL:</strong> <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a></p>

<h2>⚠️ Configuração Importante</h2>

<p>Não esqueça de:</p>
<ol>
  <li>Copiar o arquivo <code>.env.example</code> para <code>.env</code></li>
  <li>Configurar sua URL do webhook n8n no arquivo <code>.env</code></li>
  <li>Ter um servidor n8n rodando (caso queira usar o formulário de contato)</li>
</ol>

<h2>🤝 Contribuição</h2>

<p>Este é um projeto pessoal, mas sugestões e feedback são sempre bem-vindos!</p>

<hr>

<p align="center">
  <strong>Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento web</strong>
</p>

<p align="center">
  <em>© 2025 - Todos os direitos reservados</em>
</p>
