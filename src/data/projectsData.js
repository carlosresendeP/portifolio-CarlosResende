// Importações das imagens dos projetos
import projeto1 from '../assets/projects-images/mockup-relogio.png';
import projeto2 from '../assets/projects-images/mockup-devclub-coffe.png';
import projeto3 from '../assets/projects-images/mockup-conversor-de-moedas.png';
import projeto4 from '../assets/projects-images/mockup-site-previsão.png';
import projeto6 from '../assets/projects-images/mockup-slider.png';
import projeto7 from '../assets/projects-images/mockup-tesla.png';
import projeto8 from '../assets/projects-images/mockup-projeto-justly.png';
import projeto9 from '../assets/projects-images/mockup-CodeStrategy.png';
import projeto10 from '../assets/projects-images/mockup-dev-burguer.png';
import projeto11 from '../assets/projects-images/mockup-traduto-codepoint.png';
import projeto12 from '../assets/projects-images/mockup-cad-usuarios.png';
import projeto13 from '../assets/projects-images/mockup-golden.png';
import projeto15 from '../assets/projects-images/mockup-astreus-academia.png';
import projeto16 from '../assets/projects-images/mockup-decora-e-conforto.png';
import projeto17 from '../assets/projects-images/mockup-dentista-landing-page.png';
import projeto18 from '../assets/projects-images/mockup-barberdev.png';
import projeto19 from '../assets/projects-images/mockup-project-nexcent.png';
import projeto20 from '../assets/projects-images/mockup-RubiaWebsite.png';
import projeto21 from '../assets/projects-images/mockup-chatDev.png';
import projeto22 from '../assets/projects-images/mockup-archVision.png';
import projeto23 from '../assets/projects-images/mockup-pizzaria-italiana.png';
import projeto24 from '../assets/projects-images/mockup-devprice.png';
import projeto25 from '../assets/projects-images/mockup-DevBurger.png';
import projeto26 from '../assets/projects-images/mockup-prime-digital.png';
import projeto27 from '../assets/projects-images/mockup-app-dieta.png';
import projeto28 from '../assets/projects-images/mockup-DevReceita.png';
import projeto29 from '../assets/projects-images/mockup-Perf-Master.png';
import projeto30 from '../assets/projects-images/mockup-doce-encanto.png';



// Dados dos projetos
export const projectsData = [
    {
        id: 1,
        title: "Relógio Digital",
        tags: ["HTML", "CSS", "JavaScript"],
        description: "Relógio digital responsivo com interface limpa e controles básicos — projeto focado em manipulação de DOM e lógica de tempo.",
        imageUrl: projeto1,
        deploy: "https://carlosresendep.github.io/Relogio-Digital/",
        githubUrl: "https://github.com/carlosresendeP/Relogio-Digital",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: false
    },
    {
        id: 2,
        title: "DevClub Coffee",
        tags: ["HTML", "CSS", "Design"],
        description: "Landing page fictícia de cafeteria, desenvolvida com foco em layout e tipografia para prática de UI estática.",
        imageUrl: projeto2,
        deploy: "https://carlosresendep.github.io/Devclub-coffe/",
        githubUrl: "https://github.com/carlosresendeP/Devclub-coffe",
        category: "frontend",
        technologies: ["HTML", "CSS"],
        featured: false
    },
    {
        id: 3,
        title: "Conversor de Moedas",
        tags: ["HTML", "CSS", "JavaScript"],
        description: "Aplicação simples de conversão de moedas usando lógica de front-end para cálculo e formatação de valores.",
        imageUrl: projeto3,
        deploy: "https://carlosresendep.github.io/Conversor-de-Moedas/",
        githubUrl: "https://github.com/carlosresendeP/Conversor-de-Moedas",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: false
    },
    {
        id: 4,
        title: "Previsão do Tempo",
        tags: ["API", "JavaScript", "Frontend"],
        description: "Site de previsão do tempo consumindo API pública; demonstra uso de requisições, tratamento de respostas e UI responsiva.",
        imageUrl: projeto4,
        deploy: "https://carlosresendep.github.io/app-previsao-do-tempo/",
        githubUrl: "https://github.com/carlosresendeP/app-previsao-do-tempo",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        featured: false
    },
    {
        id: 6,
        title: "Dev Slider",
        tags: ["HTML", "CSS", "JavaScript", "UI"],
        description: "Componente de slider com animações e navegação, criado para praticar interações e controle de estado no DOM.",
        imageUrl: projeto6,
        deploy: "https://cityofworld.netlify.app/",
        githubUrl: "https://github.com/carlosresendeP/Slider-Paradise",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: false
    },
    {
        id: 7,
        title: "Dev Club Tesla",
        tags: ["HTML", "CSS", "JavaScript", "UI"],
        description: "Página temática inspirada no site da Tesla, com foco em layout moderno e efeitos visuais para demonstração de habilidades em front-end.",
        imageUrl: projeto7,
        deploy: "https://carlosresendep.github.io/Devclub-tesla/",
        githubUrl: "https://github.com/carlosresendeP/Devclub-tesla",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: false
    },
    {
        id: 8,
        title: "Projeto Justly - Advogados",
        tags: ["HTML", "CSS", "Landing Page"],
        description: "Landing page para escritório de advocacia (cópia educativa do Justly) com foco em apresentação de serviços e clareza de conteúdo.",
        imageUrl: projeto8,
        deploy: "https://carlosresendep.github.io/Projeto-justly/",
        githubUrl: "https://github.com/carlosresendeP/Projeto-justly",
        category: "frontend",
        technologies: ["HTML", "CSS"],
        featured: false
    },
    {
        id: 9,
        title: "Code Strategy",
        tags: ["HTML", "CSS", "JavaScript"],
        description: "Projeto de site voltado para estratégia de código e apresentação de serviços, com atenção à responsividade e experiência do usuário.",
        imageUrl: projeto9,
        deploy: "https://carlosresendep.github.io/Code-Strategy/",
        githubUrl: "https://github.com/carlosresendeP/Code-Strategy",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: true // tinha Progress: true
    },
    {
        id: 10,
        title: "Burger Store",
        tags: ["HTML", "CSS", "JavaScript", "UI"],
        description: "Site simples para hamburgueria fictícia, com navbar animado e foco em experiência visual e navegação.",
        imageUrl: projeto10,
        deploy: "https://carlosresendep.github.io/Projeto-Menu-DevBurger/",
        githubUrl: "https://github.com/carlosresendeP/Projeto-Menu-DevBurger",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: false
    },
    {
        id: 11,
        title: "Tradutor CodePoint",
        tags: ["React", "Tailwind", "API", "OpenAI"],
        description: "Tradutor de línguas funcional construído com React e integração com APIs; projeto demonstra consumo de serviços externos e UI eficiente.",
        imageUrl: projeto11,
        deploy: "https://tradutor-code-point.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/Tradutor-CodePoint",
        category: "frontend",
        technologies: ["React", "TailwindCSS", "JavaScript", "API"],
        featured: false
    },
    {
        id: 12,
        title: "Cadastro de Usuários (CRUD)",
        tags: ["React", "Styled Components", "API", "Node.js"],
        description: "Sistema de cadastro de usuários para treino de CRUD e integração com API; backend simulado e foco em fluxos de dados.",
        imageUrl: projeto12,
        deploy: "https://cadastros-de-usuarios.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/Cadastros-de-usuarios",
        category: "fullstack",
        technologies: ["React", "Styled Components", "Node.js", "MongoDB"],
        featured: false
    },
    {
        id: 13,
        title: "Página de Vendas",
        tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
        description: "Landing de vendas com foco em conversão e apresentação de produto; trabalho com layout comercial e seções de destaque.",
        imageUrl: projeto13,
        deploy: "https://carlosresendep.github.io/pagina-de-vendas/",
        githubUrl: "https://github.com/carlosresendeP/pagina-de-vendas",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: true // tinha Progress: true
    },
    {
        id: 15,
        title: "Dev Academia",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        description: "Landing page para academia com estrutura de serviços, horários e chamadas para ação — foco em layout responsivo e hierarquia de informação.",
        imageUrl: projeto15,
        deploy: "https://carlosresendep.github.io/Astraeus-Academia/",
        githubUrl: "https://github.com/carlosresendeP/Astraeus-Academia",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: false
    },
    {
        id: 16,
        title: "Decora & Conforto",
        tags: ["HTML", "CSS", "Responsive", "E-commerce"],
        description: "Site de móveis e decoração com foco em exibição de catálogo e navegação mobile-friendly.",
        imageUrl: projeto16,
        deploy: "https://carlosresendep.github.io/Decora-Conforto-Moveis-Decoracao/",
        githubUrl: "https://github.com/carlosresendeP/Decora-Conforto-Moveis-Decoracao",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
        featured: false
    },
    {
        id: 17,
        title: "Landing Page - Dentista",
        tags: ["HTML", "CSS", "JavaScript", "Landing Page"],
        description: "Landing page voltada para serviços odontológicos, com seções de contato e apresentação profissional.",
        imageUrl: projeto17,
        deploy: "https://carlosresendep.github.io/Site-para-dentista/",
        githubUrl: "https://github.com/carlosresendeP/Site-para-dentista",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: true // tinha Progress: true
    },
    {
        id: 18,
        title: "BarberDev",
        tags: ["HTML", "SASS", "JavaScript", "Responsive"],
        description: "Site moderno para barbearia com design contemporâneo, SASS para organização de estilos e foco em experiência mobile.",
        imageUrl: projeto18,
        deploy: "https://barberdev-ten.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/Projeto-Barber-shop",
        category: "frontend",
        technologies: ["HTML", "SASS", "JavaScript"],
        featured: true // tinha highlight: true
    },
    {
        id: 19,
        title: "Projeto Nexcent",
        tags: ["React", "Styled Components", "Frontend"],
        description: "Site corporativo fictício desenvolvido em React com Styled Components, ideal para demonstrar componentes reutilizáveis e layout moderno.",
        imageUrl: projeto19,
        deploy: "https://project-nexcent-theta.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/project-Nexcent",
        category: "frontend",
        technologies: ["React", "Styled Components", "JavaScript"],
        featured: false
    },
    {
        id: 20,
        title: "Website Neuropsicóloga",
        tags: ["HTML", "Bootstrap", "Responsive", "UI"],
        description: "Website clínico para profissional de saúde mental com foco em apresentação de serviços, depoimentos e navegação clara.",
        imageUrl: projeto20,
        deploy: "https://projeto-rubialand-website.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/Projeto-landing-page-neuropsicologa",
        category: "frontend",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: true // highlight true
    },
    {
        id: 21,
        title: "Chat (WebSocket)",
        tags: ["Node.js", "WebSocket", "Realtime"],
        description: "Aplicação de chat funcional utilizando WebSocket; teste local: abra várias abas com o mesmo link para conversar em tempo real.",
        imageUrl: projeto21,
        deploy: "https://chat-frontend-z4cu.onrender.com/",
        githubUrl: "https://github.com/carlosresendeP/DevChat",
        category: "fullstack",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "WebSocket"],
        featured: false
    },
    {
        id: 22,
        title: "Arch Vision",
        tags: ["HTML", "CSS", "Design", "Responsive"],
        description: "Site de arquitetura e design com foco em apresentação visual de projetos e portfolio.",
        imageUrl: projeto22,
        deploy: "https://carlosresendep.github.io/Dev-ArchVision/",
        githubUrl: "https://github.com/carlosresendeP/Dev-ArchVision",
        category: "frontend",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: true // highlight true
    },
    {
        id: 23,
        title: "Pizza Italiana",
        tags: ["React", "Styled Components", "API"],
        description: "Website de pizzaria com foco em design, usabilidade e integração para listas de produtos — projeto educativo em React.",
        imageUrl: projeto23,
        deploy: "https://carlosresendep.github.io/Pizzaria-Italiaba-landingPage/",
        githubUrl: "https://github.com/carlosresendeP/Pizzaria-Italiaba-landingPage",
        category: "frontend",
        technologies: ["React", "Styled Components", "JavaScript", "API"],
        featured: false
    },
    {
        id: 24,
        title: "Dev Price",
        tags: ["HTML", "Bootstrap", "JavaScript", "Search"],
        description: "Buscador de preços com UI orientada para pesquisa e comparação, incluindo responsividade mobile.",
        imageUrl: projeto24,
        deploy: "https://dev-price.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/Dev-Price-guide",
        category: "frontend",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: false
    },
    {
        id: 25,
        title: "Dev Burger (Fullstack)",
        tags: ["React", "Node.js", "MongoDB", "Postgres", "Stripe"],
        description: "Projeto completo de hamburgueria com sistema de pedidos, pagamentos e gerenciamento — frontend separado do backend (fullstack).",
        imageUrl: projeto25,
        deploy: "#",
        githubUrl: "https://github.com/carlosresendeP/DevBurger-Interface",
        category: "fullstack",
        technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Stripe"],
        featured: false
    },
    {
        id: 26,
        title: "Prime Digital Studio",
        tags: ["HTML", "CSS", "Bootstrap", "Agency"],
        description: "Landing page para agência de tecnologia com foco em design, apresentação de serviços e responsividade.",
        imageUrl: projeto26,
        deploy: "https://primedigital-studio.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/site-prime-digital",
        category: "frontend",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        featured: true // isNew true
    },
    {
        id: 27,
        title: "App Dieta AI",
        tags: ["React Native", "Expo", "TypeScript", "IA"],
        description: "Aplicativo mobile que gera dietas personalizadas utilizando IA (Gemini) — projeto híbrido com frontend em React Native e backend em Node.js.",
        imageUrl: projeto27,
        deploy: "#",
        githubUrl: "https://github.com/carlosresendeP/dietaai-app",
        category: "fullstack",
        technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Gemini"],
        featured: true // isNew true
    },
    {
        id: 28,
        title: "Dev Receita",
        tags: ["React", "OpenAI", "API", "Chatbot"],
        description: "Chatbot de receitas que gera instruções culinárias usando OpenAI para criar receitas rápidas e personalizadas.",
        imageUrl: projeto28,
        deploy: "https://dev-receita.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/DevReceita",
        category: "fullstack",
        technologies: ["React", "TailwindCSS", "OpenAI", "Node.js"],
        featured: true // isNew true
    },
    {
        id: 29,
        title: "Performance Master",
        tags: ["React", "Styled-Components", "n8n", "IA"],
        description: "Uma landing page completa e profissional para a academia Performance Master, desenvolvida com React, Vite e Styled Components, integrada com chatbot inteligente com n8n.",
        imageUrl: projeto29,
        deploy: "https://performace-master-academia.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/performace-master-academia",
        category: "frontend",
        technologies: ["React", "Vite", "Styled Components", "n8n", "JavaScript"],
        featured: true
    },
    {
        id: 30,
        title: "Confeitaria Doce Encanto",
        tags: ["React", "html", "Css", "Styledcomponents", "JavaScript"],
        description: "Doce Encanto é uma confeitaria fictícia, e esta landing page foi desenvolvida para fins educacionais, com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento web front-end.",
        imageUrl: projeto30,
        deploy: "https://doce-encanto-doceria.vercel.app/",
        githubUrl: "https://github.com/carlosresendeP/Doce-Encanto-doceria",
        category: "frontend",
        technologies: ["React", "Styled Components", "JavaScript"],
        featured: false
    }
];

// Função para filtrar projetos por categoria
export const getProjectsByCategory = (category) => {
    if (category === 'all') return projectsData;
    return projectsData.filter(project => project.category === category);
};

// Função para pegar apenas projetos em destaque
export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

// Função para buscar projeto por ID
export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};