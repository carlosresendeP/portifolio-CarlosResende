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
          <Greeting>Sobre Mim</Greeting>
          <div>
            <Name>Carlos Resende</Name>
            <Role>Desenvolvedor FullStack e Web</Role>
          </div>
          
          <Description>
            Sou estudante de Sistemas de Informação e atuo como desenvolvedor FullStack, com foco em Front-End. Crio websites com interfaces modernas, responsivas e otimizadas para SEO, sempre alinhando design e código para transformar ideias em soluções digitais funcionais e envolventes. Tenho experiência com React, TailwindCSS e Node.js, tecnologias que utilizo para desenvolver projetos que combinam inovação, usabilidade e resultados concretos para marcas e negócios.
          </Description>
          
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/carlos-paula2001/" target="_blank">
              <FaLinkedin />
              Carlos Paula
            </SocialLink>
            <SocialLink href="https://github.com/carlosresendeP" target="_blank">
              <FaGithub/>/CarlosResendeP
            </SocialLink>
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