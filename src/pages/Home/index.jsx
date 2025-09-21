import { useState, useEffect } from "react";
import { Container, Subtitle, Title, Highlight, TypewriterText, IntroText, Content, ImageContent,ContentText, PersonImage} from "./Home.styled";
import PersonImg from '/src/assets/person.png';
import {Button }from "../../components/UI/Button/button";
import About from "../../components/About/Index.About";
import Projects from "../../components/Projects/projects";
import Skills from "../../components/Skills/index.Skill";
import WorkFlow from "../../components/WorkFlows/index.Workflow";
import Faq from "../../components/FAQ/index.faq";
import Cta from "../../components/CTA/Cta";

const ListTitles = [
  "Desenvolvedor Front-End",
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
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 10000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % ListTitles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex]);

  return (
    <>
      <Container id="home">
        <Content>
          <div className="background-effect"></div>
          <ContentText>
            <IntroText>Hi, I'm <Highlight>Carlos Resende 👋🏼</Highlight></IntroText>
            <Title>
              <TypewriterText>{displayedText}</TypewriterText>
            </Title>
            <Subtitle>
              Como desenvolvedor Front-End, crio experiências digitais que unem estética e usabilidade. Do layout à interação, cada linha de código é projetada para encantar o usuário, garantindo sites rápidos, responsivos e memoráveis!
            </Subtitle>
            <Button>Começe um projeto</Button>
          </ContentText>
          <ImageContent>
            <div>
              <PersonImage src={PersonImg} alt="Carlos - imagem" />
            </div>
          </ImageContent>
        </Content>
      </Container>

      <About />
      <Projects />
      <WorkFlow />
      <Skills />
      <Faq />
      <Cta />
    </>
  );
}

export default Home;