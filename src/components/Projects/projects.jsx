import { Buttons, Container, Content, Description, Header, ImgProject, ProjectsList, Tags, TextProject, Button, Title, Subtitle, FinalButton, ModalBackdrop, ModalCard, ModalText } from "./projects.styled"
import { Link } from "react-router"
import { useState } from "react"
import { projectsData } from '../../data'
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

    // Pegar apenas os 3 projetos mais recentes (com ID maior)
    const projects = projectsData
        .sort((a, b) => b.id - a.id) // Ordenar por ID decrescente (maior primeiro)
        .slice(0, 3); // Pegar apenas os 3 primeiros


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