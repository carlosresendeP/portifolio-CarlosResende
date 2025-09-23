import { useState } from 'react';
import { 
    Container, 
    Content, 
    LeftSection, 
    RightSection, 
    Title, 
    Description, 
    QuestionSection, 
    QuestionTitle, 
    ContactSection, 
    ContactTitle, 
    ContactDescription, 
    ContactButton, 
    FaqItem, 
    FaqQuestion, 
    FaqAnswer, 
    ChevronIcon 
} from "./Faq.styled";
import { FaChevronDown } from 'react-icons/fa';

const Faq = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
  {
    question: "Quais serviços você oferece?",
    answer: "Desenvolvo sites institucionais, landing pages, sistemas web e plataformas personalizadas. Cuido desde a interface moderna e responsiva até a integração com bancos de dados e automações."
  },
  {
    question: "Com quais tecnologias você trabalha?",
    answer: "No front-end utilizo HTML, CSS, JavaScript, React, Sass, TailwindCSS e Bootstrap. No back-end tenho experiência com Node.js, Express, PostgreSQL, MongoDB, Docker, Sequelize e Prisma, além de automações com IA (ChatGPT, Gemini e n8n)."
  },
  {
    question: "Você já desenvolveu projetos completos?",
    answer: "Sim! Entre eles estão o DevBurger (sistema de gestão para hamburgueria, com front-end em React e back-end em Node.js) e o WebPronto (plataforma para criação de sites prontos e personalizáveis)."
  },
  {
    question: "Quanto tempo leva um projeto?",
    answer: "Depende da complexidade. Uma landing page pode ser entregue em 1 a 2 semanas, já sistemas mais robustos podem levar de 1 a 3 meses. Sempre defino prazos claros no início do projeto."
  },
  {
    question: "Qual é o investimento para desenvolver um site ou sistema?",
    answer: "O valor varia conforme o escopo, funcionalidades e prazos. Faço orçamentos personalizados e transparentes para atender às necessidades de cada cliente."
  },
  {
    question: "Como funciona seu processo de trabalho?",
    answer: "Meu processo é estruturado em 4 etapas: (1) pesquisa e briefing, (2) Designer, (3) desenvolvimento, (4) entrega com suporte. Mantenho contato constante para alinhar expectativas."
  },
  {
    question: "Você oferece suporte depois da entrega?",
    answer: "Sim. Incluo suporte pós-entrega para ajustes e pequenas correções. Também ofereço planos de manutenção contínua caso o cliente precise evoluir o projeto ao longo do tempo."
  }
];


    return (
        <Container id='faq'>
            <Content>
                <LeftSection>
                    <Title>Perguntas frequentes</Title>
                    <Description>
                        Separei aqui as principais dúvidas que clientes costumam ter sobre meu trabalho, prazos e forma de atuação. Assim você já entende como trabalho antes mesmo de entrarmos em contato.
                    </Description>

                    <ContactSection>
                        <ContactTitle>Ainda com dúvidas?</ContactTitle>
                        <ContactDescription>
                            Não encontrou a resposta para sua pergunta?<br />
                            Você pode entrar em contato comigo pelo meu e-mail, vamos discutir sobre o seu projeto!
                        </ContactDescription>
                        <ContactButton onClick={() => window.open('https://wa.me/5532998283189?text=Olá! Gostaria de tirar algumas dúvidas sobre seus serviços.', '_blank')}>
                            Me envie uma mensagem
                        </ContactButton>
                    </ContactSection>
                </LeftSection>

                <RightSection>
                    <QuestionSection>
                        {faqData.map((item, index) => (
                            <FaqItem key={index} isOpen={openItems[index]}>
                                <FaqQuestion onClick={() => toggleItem(index)}>
                                    <span>{item.question}</span>
                                    <ChevronIcon isOpen={openItems[index]}>
                                        <FaChevronDown />
                                    </ChevronIcon>
                                </FaqQuestion>
                                <FaqAnswer isOpen={openItems[index]}>
                                    {item.answer}
                                </FaqAnswer>
                            </FaqItem>
                        ))}
                    </QuestionSection>
                </RightSection>
            </Content>
        </Container>
    )
}
export default Faq;