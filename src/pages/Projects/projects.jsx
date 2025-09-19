import { Buttons, Container, Content, Description, Header, ImgProject, ProjectsList, Tags, TextProject, Button, Title, Subtitle } from "./projects.styled"
import projeto1 from '../../assets/projects-images/Persormace-master-thumb.png'
import projeto3 from '../../assets/projects-images/Conf-Doce-Encanto.png'
import { MdComputer } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'


const Projects = () => {

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
            imageUrl: "https://private-user-images.githubusercontent.com/165225304/439444029-bccc9abe-7aa7-47ee-a799-519bd0717f7c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgyMzU3OTgsIm5iZiI6MTc1ODIzNTQ5OCwicGF0aCI6Ii8xNjUyMjUzMDQvNDM5NDQ0MDI5LWJjY2M5YWJlLTdhYTctNDdlZS1hNzk5LTUxOWJkMDcxN2Y3Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTE4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxOFQyMjQ0NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNjlkMGVhMjQ2NWQwMjYzZDQ5YjM0Yjg4NjI5MGE4YmZlNTY4NDc4NWI4NzFlNTM4MDVlMDhlODE4OTNlOTYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.guLhRnCiQ9ik0BUHqTayVQREYBuKoDHOg8_e46Jboss",
            deploy: "#",
            githubUrl: "#"
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
                                <Button href={project.deploy} target="_blank">
                                    <MdComputer />
                                    Ver Live
                                </Button>
                                <Button href={project.githubUrl} target="_blank">
                                    <FaGithub />
                                    Ver no Github
                                </Button>
                            </Buttons>
                        </TextProject>
                    </ProjectsList>
                ))}
            </Content>
        </Container>
    )
}

export  default Projects