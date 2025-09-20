import { useState, useEffect } from "react";
import { Container, Subtitle, Title, Highlight, TypewriterText, IntroText, Content, ImageContent,ContentText, PersonImage} from "./Home.styled";

import PersonImg from '../../assets/person.png';
import Button from "../../components/UI/Button/button";
import About from "../About/Index.About";
import Projects from "../Projects/projects";

import Skills from "../Skills/index.Skill";
import WorkFlow from "../WorkFlows/index.workflow";

const ListTitles = [
  "Desenvolvedor Front-End",
  "Desenvolvedor de interfaces",
  "Desenvolvedor Full Stack",
  "Desenvolvedor Web",
  "Engenheiro de Software",
];

function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = ListTitles[currentTitleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      // Digitando
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100); // Velocidade de digitação
    } else if (!isDeleting && charIndex === currentTitle.length) {
      // Pausa antes de começar a apagar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 10000); // 10 segundos de pausa
    } else if (isDeleting && charIndex > 0) {
      // Apagando
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50); // Velocidade de apagar (mais rápido)
    } else if (isDeleting && charIndex === 0) {
      // Mudando para o próximo título
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % ListTitles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex]);

  return (
    <>
      <Container id="home">
        <Content>
          <ContentText>
            <IntroText>Hi, I'm <Highlight>Carlos Resende 👋🏼</Highlight></IntroText>
            <Title>
              <TypewriterText>{displayedText}</TypewriterText>
            </Title>
            <Subtitle>
              Como desenvolvedor Front-End, crio experiências digitais que unem estética e usabilidade. Do layout à interação, cada linha de código é projetada para encantar o usuário, garantindo sites rápidos, responsivos e memoráveis!
            </Subtitle>

            <Button >
              Começe um projeto
            </Button>
          </ContentText>
          <ImageContent>
            <div>
              <PersonImage src={PersonImg} alt="Carlos - imagem" />
            </div>
          </ImageContent>
        </Content>


      </Container>

      <About></About>

      <Projects></Projects>

      <WorkFlow></WorkFlow>

      <Skills></Skills>
    </>
    
    
  );
}

export default Home;