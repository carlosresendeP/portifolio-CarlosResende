import { Buttons, Container, Content, Description, Header, ImgProject, ProjectsList, Tags, TextProject, Button, Title, Subtitle, FinalButton, ModalBackdrop, ModalCard, ModalText } from "./projects.styled"
import { Link } from "react-router"
import { useState } from "react"
import projeto1 from '../../assets/projects-images/Mockup-Perf-Master.png'
import projeto2 from '../../assets/projects-images/Mockup-DevBurger.png'
import projeto3 from '../../assets/projects-images/Mockup-doce-encanto.png'
import { MdComputer } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'


const Projects = () => {

    const [showModal, setShowModal] = useState(false);

    const handleDeployClick = (deployUrl) => {
        if (deployUrl === "#") {
            setShowModal(true);
            setTimeout(() => setShowModal(false), 3000); // Fecha automaticamente após 3 segundos
        } else {
            window.open(deployUrl, "_blank");
        }
    };

    const handleGithubClick = (githubUrl) => {
        if (githubUrl === "#") {
            setShowModal(true);
            setTimeout(() => setShowModal(false), 3000);
        } else {
            window.open(githubUrl, "_blank");
        }
    };

    const projects =[
        {
            title: "Performance Master",
            tags: ["React", "Styled-Components", "n8n", "IA"],
            description: "Uma landing page completa e profissional para a academia Performance Master, desenvolvida com React, Vite e Styled Components, integrada com chatbot inteligente com n8n.",
            imageUrl: projeto1,
            deploy: "https://performace-master-academia.vercel.app/",
            githubUrl: "https://github.com/carlosresendeP/performace-master-academia"
        },
        {
            title: "DevBurger",
            tags: ["Html", "Css", "Styledcomponents", "JavaScript", "Node.js", "Express", "MongoDb", "Postgres", "Stripe"],
            description: "DevBurger, uma aplicação completa de gerenciamento de pedidos de hamburgueria, desenvolvida com frontend e backend separados. Este projeto foi criado para praticar conceitos modernos de desenvolvimento web full stack Projeto desenvolvido junto ao curso DevClub com Rodolfo Mori.",
            imageUrl: projeto2,
            deploy: "#",
            githubUrl: "https://github.com/carlosresendeP/DevBurger-Interface"
        },

        {
            title: "Confeitaria Doce Encanto",
            tags: ["React", "html", "Css", "Styledcomponents", "JavaScript"],
            description: "Doce Encanto é uma confeitaria fictícia, e esta landing page foi desenvolvida para fins educacionais, com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento web front-end.",
            imageUrl: projeto3,
            deploy: "https://doce-encanto-doceria.vercel.app/",
            githubUrl: "https://github.com/carlosresendeP/Doce-Encanto-doceria"
        },
    ]


    return(
        <Container id="projects">
            <Header>
                <Title>Projetos</Title>
                <Subtitle>Meus melhores projetos • 2024 - 2025</Subtitle>
            </Header>
            <Content>
                {projects.map((project, index) => (
                    <ProjectsList key={index}>
                        <ImgProject>
                            <img src={project.imageUrl} alt={project.title} />
                        </ImgProject>

                        <TextProject>
                            <h2>{project.title}</h2>
                            <Tags>
                                {project.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </Tags>
                            <Description>
                                {project.description}
                            </Description>

                            <Buttons>
                                <Button 
                                    as="button" 
                                    onClick={() => handleDeployClick(project.deploy)}
                                >
                                    <MdComputer />
                                    Ver Live
                                </Button>
                                <Button 
                                    as="button" 
                                    onClick={() => handleGithubClick(project.githubUrl)}
                                >
                                    <FaGithub />
                                    Ver no Github
                                </Button>
                            </Buttons>
                        </TextProject>
                    </ProjectsList>
                ))}

                <FinalButton to="/projects">Ver Todos os projetos</FinalButton>
            </Content>
            
            {showModal && (
                <>
                    <ModalBackdrop onClick={() => setShowModal(false)} />
                    <ModalCard>
                        <ModalText>
                            Live do Projeto não disponível no momento.
                        </ModalText>
                    </ModalCard>
                </>
            )}
        </Container>
    )
}

export  default Projects