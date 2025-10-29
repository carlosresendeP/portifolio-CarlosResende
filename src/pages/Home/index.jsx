import { useState, useEffect } from "react";
import { Container, Subtitle, Title, Highlight, TypewriterText, IntroText, Content, ImageContent, ContentText, PersonImage, ButtonContainer} from "./Home.styled";
import PersonImg from '../../assets/person.png';
import { Button } from "../../components/UI/Button/button";
import { useContactModal } from "../../hooks/useContactModal";
import ContactModal from "../../components/ContactModal/ContactModal";
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
];

function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const {
    showModal,
    openModal,
    closeModal,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting
  } = useContactModal()

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
            <IntroText>Prazer! Eu sou <Highlight>Carlos Resende</Highlight></IntroText>
            <Title>
              <TypewriterText>{displayedText}</TypewriterText>
            </Title>
            <Subtitle>
              Especialista em Front-End. Meu trabalho vai além do código: garanto a pixel-perfection e a performance otimizada, transformando designs complexos em interfaces rápidas, acessíveis e totalmente responsivas.
            </Subtitle>
            <ButtonContainer>
              <Button onClick={openModal}>Começe um projeto</Button>
              <Button 
                variant="secondary" 
                onClick={() => window.open('https://wa.me/5532998283189?text=Olá! Gostaria de solicitar um orçamento para meu projeto.', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </ButtonContainer>
          </ContentText>
          <ImageContent>
            <div>
              <PersonImage src={PersonImg} alt="Carlos - imagem" />
            </div>
          </ImageContent>
        </Content>
      </Container>

      <ContactModal
        showModal={showModal}
        closeModal={closeModal}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
      />

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