import {
    ModalBackdrop,
    ModalCard,
    CloseButton,
    ModalTitle,
    ModalSubtitle,
    Form,
    FormGroup,
    Label,
    Input,
    Select,
    TextArea,
    ButtonGroup,
    CancelButton,
    SubmitButton,
    ErrorMessage
} from "./ContactModal.styled"

const ContactModal = ({ 
    showModal, 
    closeModal, 
    register, 
    handleSubmit, 
    onSubmit, 
    errors, 
    isSubmitting 
}) => {
    if (!showModal) return null

    return (
        <ModalBackdrop onClick={closeModal}>
            <ModalCard onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal}>
                    ×
                </CloseButton>

                <ModalTitle>
                    Vamos começar seu projeto!
                </ModalTitle>
                
                <ModalSubtitle>
                    Preencha as informações abaixo e entrarei em contato em até 24 horas.
                </ModalSubtitle>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* Nome */}
                    <FormGroup>
                        <Label>Nome completo *</Label>
                        <Input
                            type="text"
                            placeholder="Seu nome completo"
                            {...register("nome", { 
                                required: "Nome é obrigatório",
                                minLength: {
                                    value: 2,
                                    message: "Nome deve ter pelo menos 2 caracteres"
                                }
                            })}
                        />
                        {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
                    </FormGroup>

                    {/* Email */}
                    <FormGroup>
                        <Label>Email *</Label>
                        <Input
                            type="email"
                            placeholder="seu@email.com"
                            {...register("email", { 
                                required: "Email é obrigatório",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email inválido"
                                }
                            })}
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormGroup>

                    {/* Telefone */}
                    <FormGroup>
                        <Label>Telefone/WhatsApp</Label>
                        <Input
                            type="tel"
                            placeholder="(11) 99999-9999"
                            {...register("telefone")}
                        />
                    </FormGroup>

                    {/* Empresa */}
                    <FormGroup>
                        <Label>Empresa</Label>
                        <Input
                            type="text"
                            placeholder="Nome da sua empresa"
                            {...register("empresa")}
                        />
                    </FormGroup>

                    {/* Tipo de Projeto */}
                    <FormGroup>
                        <Label>Tipo de projeto *</Label>
                        <Select
                            {...register("projeto", { 
                                required: "Selecione o tipo de projeto" 
                            })}
                        >
                            <option value="">Selecione o tipo de projeto</option>
                            <option value="landing-page">Landing Page</option>
                            <option value="site-institucional">Site Institucional</option>
                            <option value="e-commerce">E-commerce</option>
                            <option value="sistema-web">Sistema Web</option>
                            <option value="aplicativo">Aplicativo</option>
                            <option value="outro">Outro</option>
                        </Select>
                        {errors.projeto && <ErrorMessage>{errors.projeto.message}</ErrorMessage>}
                    </FormGroup>

                    {/* Descrição */}
                    <FormGroup>
                        <Label>Descrição do projeto</Label>
                        <TextArea
                            rows="4"
                            placeholder="Conte-me mais sobre seu projeto, objetivos, público-alvo, funcionalidades desejadas..."
                            {...register("descricao")}
                        />
                    </FormGroup>

                    {/* Botões */}
                    <ButtonGroup>
                        <CancelButton type="button" onClick={closeModal}>
                            Cancelar
                        </CancelButton>
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar solicitação'}
                        </SubmitButton>
                    </ButtonGroup>
                </Form>
            </ModalCard>
        </ModalBackdrop>
    )
}

export default ContactModal