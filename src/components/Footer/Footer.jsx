
import { Logo } from "../UI/Logo/logo";
import { Content, CopyText, FooterContainer, LogoContent, SocialLink, SocialLinks } from "./Footer.styled";
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

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
                        {/* <SocialLink href="https://behance.net/felipekenzo" target="_blank">
                        <FaBehance />
                        /felipekenzo
                        </SocialLink> */}
                    </SocialLinks>
                </LogoContent>

                <CopyText>
                    <p>&copy; {currentYear}. Todos os direitos reservados.</p>
                    <p>Desenvolvido com React.js</p>
                </CopyText>
            </Content>

        </FooterContainer>
    )
}

export default Footer;