import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  Container,
  Title,
  ContactInfo,
  ContactItem,
  ContactText
} from './Contact.styled';

function Contact() {
  return (
    <Container>
      <Title>Entre em Contato</Title>
      <ContactInfo>
        <ContactItem href="mailto:seu.email@exemplo.com">
          <FaEnvelope />
          <ContactText>seu.email@exemplo.com</ContactText>
        </ContactItem>
        
        <ContactItem href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <ContactText>GitHub</ContactText>
        </ContactItem>
        
        <ContactItem href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <ContactText>LinkedIn</ContactText>
        </ContactItem>
      </ContactInfo>
    </Container>
  );
}

export default Contact;