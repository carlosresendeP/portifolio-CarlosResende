
import { 
    Container, 
    Header, 
    Title, 
    Subtitle, 
    SkillsGrid, 
    SkillCategory, 
    CategoryTitle, 
    SkillsList, 
    SkillItem, 
    SkillIcon, 
    SkillInfo,
    SkillName, 
    SkillLevelContainer,
    SkillLevel,
    ProgressBar
} from "./Skills.styled";
import { 
    FaReact, 
    FaJsSquare, 
    FaHtml5, 
    FaCss3Alt, 
    FaNodeJs, 
    FaGitAlt, 
    FaFigma, 
    FaDatabase 
} from 'react-icons/fa';
import { 
    SiTypescript, 
    SiStyledcomponents, 
    SiNextdotjs, 
    SiVite, 
    SiMongodb, 
    SiPostgresql,
    SiExpress,
    SiPrisma,
    SiN8N 
} from 'react-icons/si';

const Skills = () => {

    const skillsData = [
        {
            category: "Frontend",
            skills: [
                { name: "React", icon: <FaReact />, level: "Avançado" },
                { name: "JavaScript", icon: <FaJsSquare />, level: "Avançado" },
                { name: "TypeScript", icon: <SiTypescript />, level: "Intermediário" },
                { name: "HTML5", icon: <FaHtml5 />, level: "Avançado" },
                { name: "CSS3", icon: <FaCss3Alt />, level: "Avançado" },
                { name: "Styled Components", icon: <SiStyledcomponents />, level: "Avançado" },
                { name: "Vite", icon: <SiVite />, level: "Avançado" }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, level: "Intermediário" },
                { name: "Express", icon: <SiExpress />, level: "Intermediário" },
                { name: "MongoDB", icon: <SiMongodb />, level: "Intermediário" },
                { name: "PostgreSQL", icon: <SiPostgresql />, level: "Básico" },
                { name: "Prisma", icon: <SiPrisma />, level: "Intermediário" }
            ]
        },
        {
            category: "Design & Tools",
            skills: [
                { name: "Figma", icon: <FaFigma />, level: "Básico" },
                { name: "Git", icon: <FaGitAlt />, level: "Intermediário" },
                { name: "UI/UX Design", icon: <FaDatabase />, level: "Intermediário" },
                {name: "N8N", icon: <SiN8N  />, level: "Básico" },
            ]
        }
    ];

    return(
        <Container id="skills">
            <Header>
                <Title>Minhas Skills</Title>
                <Subtitle>Tecnologias e ferramentas que domino</Subtitle>
            </Header>

            <SkillsGrid>
                {skillsData.map((category, index) => (
                    <SkillCategory key={index} index={index}>
                        <CategoryTitle>{category.category}</CategoryTitle>
                        <SkillsList>
                            {category.skills.map((skill, skillIndex) => (
                                <SkillItem key={skillIndex}>
                                    <SkillIcon index={skillIndex}>{skill.icon}</SkillIcon>
                                    <SkillInfo>
                                        <SkillName>{skill.name}</SkillName>
                                        <SkillLevelContainer>
                                            <SkillLevel $level={skill.level}>{skill.level}</SkillLevel>
                                            <ProgressBar $level={skill.level} />
                                        </SkillLevelContainer>
                                    </SkillInfo>
                                </SkillItem>
                            ))}
                        </SkillsList>
                    </SkillCategory>
                ))}
            </SkillsGrid>
        </Container>
    )
}

export default Skills;