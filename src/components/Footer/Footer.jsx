
import { Logo } from "../UI/Logo/logo";
import { Content, CopyText, FooterContainer, LogoContent, SocialLink, SocialLinks } from "./Footer.styled";
import { FaLinkedin, FaGithub, FaWhatsapp  } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <FooterContainer>
            <Content>
                <LogoContent>
                    <Logo></Logo>

                    <SocialLinks>
                        <SocialLink href="https://www.linkedin.com/in/carlos-paula2001/" target="_blank">
                        <FaLinkedin /> 
                        Carlos Paula
                        </SocialLink>
                        <SocialLink href="https://github.com/carlosresendeP" target="_blank">
                        <FaGithub/>/CarlosResendeP
                        </SocialLink>
 

                    </SocialLinks>
                    <p><IoMdMail /> Email: dev.carlosresende@hotmail.com</p>
                    <p><FaWhatsapp />Tel: (32) 9 9828-3189</p>
                </LogoContent>

                <CopyText>
                    <p>&copy; {currentYear}. Todos os direitos reservados.</p>

                </CopyText>
            </Content>

        </FooterContainer>
    )
}

export default Footer;