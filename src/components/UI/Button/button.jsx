import { ButtonContainer } from "./Button.styles"

export const Button = ({ 
    children, 
    onClick, 
    type = "button", 
    variant = "primary", 
    disabled = false,
    ...props 
}) => {
    return(
        <ButtonContainer 
            onClick={onClick}
            type={type}
            variant={variant}
            disabled={disabled}
            {...props}
        >
            {children}
        </ButtonContainer>
    )
}
