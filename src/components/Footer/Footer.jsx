import { Content, CopyText, FooterContainer, Logo } from "./Footer.styled";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <FooterContainer>
            <Content>
                <Logo>Meu Portfólio</Logo>

                <CopyText>
                    <p>&copy; {currentYear}. Todos os direitos reservados.</p>
                    <p>Desenvolvido com React.js</p>
                </CopyText>
            </Content>

        </FooterContainer>
    )
}

export default Footer;