import { Container, ContentWork, HeaderWork, WorkflowItem, StepNumber, StepIcon, StepContent, StepTitle, StepDescription } from "./workflow.styled";
import { FaSearch, FaPalette, FaCode, FaRocket } from 'react-icons/fa';

const WorkFlow = () => {

    const contentCard=[
        {
            number: "01",
            title: "Pesquisa", 
            icon: <FaSearch />,
            description: "Analiso negócio e concorrentes para identificar necessidades reais e alinhar o design aos objetivos."
        },
        {
            number: "02",
            title: "Design",
            icon: <FaPalette />,
            description: "Crio fluxos, wireframes e interfaces visuais focadas em clareza, usabilidade e consistência."
        },
        {
            number: "03",
            title: "Desenvolvimento",
            icon: <FaCode />,
            description: "Transformo o design em interfaces reais, garantindo fidelidade visual e eficiência no desenvolvimento."
        },
        {
            number: "04",
            title: "Entrega",
            icon: <FaRocket />,
            description: "Entrego o projeto finalizado com toda a documentação necessária, garantindo clareza e prontidão."
        }
    ]

    return(
        <Container id="workflow">
            <HeaderWork>
                <h2>Meu processo de trabalho</h2>
            </HeaderWork>

            <ContentWork>
                {contentCard.map((item, index) => (
                    <WorkflowItem key={index}>
                        <StepNumber>{item.number}</StepNumber>
                        <StepIcon>{item.icon}</StepIcon>
                        <StepContent>
                            <StepTitle>{item.title}</StepTitle>
                            <StepDescription>{item.description}</StepDescription>
                        </StepContent>
                    </WorkflowItem>
                ))}
            </ContentWork>
        </Container>
    )
}
export default WorkFlow;