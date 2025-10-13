import { Buttons, Container, Content,ContentGrid, Description, Header, ImgProject, ProjectsCard, Tags, TextProject, Button, Title, HeaderControls, SortButton, Search, SearchResults, NoResults, NoResultsTitle, NoResultsText, FinalButton, ModalBackdrop, ModalCard, ModalText } from "./AllProjects.styled"
import { useState } from "react"
import { projectsData, searchProjects } from '../../data'
import { MdComputer } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { FaMagnifyingGlass } from "react-icons/fa6"
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'


const AllProjects = () => {

    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isAscending, setIsAscending] = useState(false); // true = crescente, false = decrescente

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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // A busca já é aplicada automaticamente através do filteredProjects
    };

    const handleSortToggle = () => {
        setIsAscending(!isAscending);
    };

    // Filtrar projetos baseado no termo de busca
    const filteredProjects = searchProjects(projectsData, searchTerm);
    
    // Ordenar projetos por ID
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        return isAscending ? a.id - b.id : b.id - a.id;
    });
    
    const projects = sortedProjects;


    return(
        <Container id="projects">

            <Header>
                <Title>Projetos</Title>
                <HeaderControls>
                    <SortButton onClick={handleSortToggle}>
                        {isAscending ? <FaSortAmountDown /> : <FaSortAmountUp />}
                        <span>{isAscending ? '' : ''}</span>
                    </SortButton>
                    <Search>
                    <form onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Pesquisar por nome ou tecnologia..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button type="submit">
                            <FaMagnifyingGlass />
                        </button>
                    </form>
                    {searchTerm && (
                        <SearchResults>
                            {projects.length} projeto{projects.length !== 1 ? 's' : ''} encontrado{projects.length !== 1 ? 's' : ''}
                            {searchTerm && ` para "${searchTerm}"`}
                        </SearchResults>
                    )}
                    </Search>
                </HeaderControls>
            </Header>
            <Content>
                {projects.length > 0 ? (
                    <ContentGrid>
                        {projects.map((project, index) => (
                            <ProjectsCard key={project.id || index}>
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
                            </ProjectsCard>
                        ))}
                    </ContentGrid>
                ) : (
                    <NoResults>
                        <NoResultsTitle>Nenhum projeto encontrado</NoResultsTitle>
                        <NoResultsText>Tente buscar por outros termos ou tecnologias</NoResultsText>
                    </NoResults>
                )}
                <FinalButton to="/">Voltar</FinalButton>
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

export  default AllProjects