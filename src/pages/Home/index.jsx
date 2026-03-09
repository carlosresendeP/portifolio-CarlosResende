import { useState, useEffect } from "react";
import {
  Container,
  Subtitle,
  Title,
  Highlight,
  IntroText,
  Content,
  ImageContent,
  ContentText,
  PersonImage,
  ButtonContainer,
  Badge,
} from "./Home.styled";
import PersonImg from "../../assets/person.png";
import { Button } from "../../components/UI/Button/button";
import { useContactModal } from "../../hooks/useContactModal";
import ContactModal from "../../components/ContactModal/ContactModal";
import About from "../../components/About/Index.About";
import Projects from "../../components/Projects/projects";
import Skills from "../../components/Skills/index.Skill";
import WorkFlow from "../../components/WorkFlows/index.Workflow";
import Faq from "../../components/FAQ/index.faq";
import Cta from "../../components/CTA/Cta";
import ColorBends from "../../components/ColorBends";
import { AnimatePresence, motion } from "framer-motion";


const ListTitles = [
  "Desenvolvedor Front-End",
  "Desenvolvedor Full Stack",
  "Desenvolvedor Web",
  "Desenvolvedor de Software",
];

function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const {
    showModal,
    openModal,
    closeModal,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  } = useContactModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % ListTitles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container id="home">
        <Content>
          {/* <div className="background-effect"></div> */}
          <div className="background-effect">
            <ColorBends
              colors={["#353535", "#6055ff", "#346aff", "#60ffa7"]}
              height="100%"
              width="100%"
              blur="100px"
              opacity="0.7"
              speed={0.4}
              mouseInfluence={0}
              rotation={30}
              parallax={0}
              scale={1.7}
              frequency={1.1}
            />
          </div>

          <ContentText>
            <Badge>
              Disponível para novos projetos
            </Badge>

            <IntroText>
              Olá me chamo <Highlight>Carlos Resende</Highlight>
            </IntroText>
            <Title>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "inline-block" }}
                >
                  {ListTitles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </Title>
            <Subtitle>
              Especialista em Front-End. Meu trabalho vai além do código:
              garanto a pixel-perfection e a performance otimizada,
              transformando designs complexos em interfaces rápidas, acessíveis
              e totalmente responsivas.
            </Subtitle>
            <ButtonContainer>
              <Button variant="primary" onClick={openModal}>
                Começe um projeto
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  window.open(
                    "https://wa.me/5532998283189?text=Olá! Gostaria de solicitar um orçamento para meu projeto.",
                    "_blank",
                  )
                }
              >
                Solicitar Orçamento
              </Button>
            </ButtonContainer>
          </ContentText>
          {/* <ImageContent>
            <div>
              <PersonImage src={PersonImg} alt="Carlos - imagem" />
            </div>
          </ImageContent> */}
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
