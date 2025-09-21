import { 
  Container, 
  Content, 
  ImageSection, 
  ProfileImage, 
  TextSection, 
  Name, 
  Role, 
  Description, 
  TagContainer, 
  Tag,
  SocialLinks,
  SocialLink,
  Greeting
} from "./About.styles";
import PersonImg from '../../assets/person.png';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

function About() {
  return (
    <Container id="about">
      <Content>
        <ImageSection>
          <ProfileImage src={PersonImg} alt="Carlos-Resende" />
        </ImageSection>
        
        <TextSection>
          <Greeting>Muito prazer 👋</Greeting>
          <div>
            <Name>Carlos Resende</Name>
            <Role>Desenvolvedor FullStack</Role>
          </div>
          
          <Description>
            Curso Sistemas de Informação e desenvolvimento FullStack atuo no desenvolvimento Front-End, criando interfaces modernas, responsivas e otimizadas para SEO. Minha experiência une código e design para transformar ideias em soluções digitais claras, eficientes e funcionais. Venho evoluindo continuamente em tecnologias como React, TailwindCSS e Node.js, sempre com o objetivo de entregar projetos que unam inovação, usabilidade e impacto real para marcas e negócios.
          </Description>
          
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/carlos-paula2001/" target="_blank">
              <FaLinkedin />
              Carlos Paula
            </SocialLink>
            <SocialLink href="https://github.com/carlosresendeP" target="_blank">
              <FaGithub/>/CarlosResendeP
            </SocialLink>
            {/* <SocialLink href="https://behance.net/felipekenzo" target="_blank">
              <FaBehance />
              /felipekenzo
            </SocialLink> */}
          </SocialLinks>
          
          <TagContainer>
            <Tag>1 ano de experiência</Tag>
            <Tag>Desenvolvedor Front-end</Tag>
            <Tag>React</Tag>
            <Tag>JavaScript e Typescript</Tag>
            <Tag>HTML e CSS</Tag>
            <Tag>TailwindCss e Styled Components</Tag>
            <Tag>MongoDb e Postgres</Tag>
            <Tag>Conhecimento em N8N e IA</Tag>
          </TagContainer>
        </TextSection>
      </Content>
    </Container>
  );
}

export default About;