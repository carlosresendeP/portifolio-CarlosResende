import { useContactModal } from "../../hooks/useContactModal"
import { Button } from "../UI/Button/button"
import ContactModal from "../ContactModal/ContactModal"
import { 
    Container, 
    Content, 
    Title, 
    Description, 
    Highlight, 
    ContentText
} from "./cta.styled"

const Cta = () => {
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

    return (
        <Container id="contact">
            <Content>
                <div className="background-effect"></div>

                <ContentText>
                    <Title>
                        Vamos começar<br />
                        um projeto juntos?
                    </Title>
                    <Description>
                        Do primeiro esboço ao código final, cada detalhe importa.<br />
                        Seu projeto é o <Highlight>próximo sucesso</Highlight> que vamos construir juntos.
                    </Description>
                    <Button 
                        variant="cta" 
                        onClick={openModal}
                        className="cta-button"
                    >
                        Comece um projeto
                    </Button>
                </ContentText>
            </Content>

            <ContactModal
                showModal={showModal}
                closeModal={closeModal}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
            />
        </Container>
    )
}

export default Cta