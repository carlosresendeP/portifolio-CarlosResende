import { Container, Content, Title, Description, Highlight, CTAButton, ContentText } from "./cta.styled"

const Cta = () => {

    return (
        <Container>

            <Content>
                <div className="background-effect">

                </div>

                <ContentText>
                    <Title>
                        Vamos começar<br />
                        um projeto juntos?
                    </Title>
                    <Description>
                        Do primeiro esboço ao código final, cada detalhe importa.<br />
                        Seu projeto merece ser levado ao <Highlight>próximo nível</Highlight>.
                    </Description>
                    <CTAButton>
                        Comece um projeto
                    </CTAButton>
                </ContentText>
            </Content>
        </Container>
    )
}

export default Cta