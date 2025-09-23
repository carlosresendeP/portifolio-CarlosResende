import styled, { css } from "styled-components";

const getVariantStyles = (variant, theme) => {
    switch (variant) {
        case 'primary':
            return css`
                background-color: transparent;
                border: 2px solid ${theme.colors.primary[200]};
                color: ${theme.colors.neutral[100]};
                
                &:hover:not(:disabled) {
                    background-color: ${theme.colors.primary[600]};
                    border-color: ${theme.colors.primary[600]};
                }
            `;
        case 'cta':
            return css`
                background: transparent;
                color: ${theme.colors.neutral[100]};
                border: 2px solid ${theme.colors.neutral[100]};
                
                &:hover:not(:disabled) {
                    background: ${theme.colors.neutral[100]};
                    color: ${theme.colors.neutral[950]};
                    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
                }
            `;
        case 'secondary':
            return css`
                background: ${theme.colors.neutral[100]};
                color: ${theme.colors.neutral[900]};
                border: 2px solid ${theme.colors.neutral[300]};
                
                &:hover:not(:disabled) {
                    background: transparent;
                    border-color: ${theme.colors.neutral[400]};
                    color: ${theme.colors.neutral[100]};
                }
            `;
        default:
            return css`
                background-color: transparent;
                border: 2px solid ${theme.colors.primary[200]};
                color: ${theme.colors.neutral[100]};
                
                &:hover:not(:disabled) {
                    background-color: ${theme.colors.primary[600]};
                    border-color: ${theme.colors.primary[600]};
                }
            `;
    }
};

export const ButtonContainer = styled.button`
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 40px;
    max-width: 50%;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    ${({ variant, theme }) => getVariantStyles(variant, theme)}

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
    }

    &:hover:not(:disabled) {
        transform: translateY(-2px);

        &::before {
            left: 100%;
        }
    }

    &:active:not(:disabled) {
        transform: translateY(0);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }

    /* Variações específicas do CTA */
    &.cta-button {
        padding: 16px 32px;
        border-radius: 8px;
        font-size: 1.125rem;
        margin-top: 10px;
        max-width: 250px;
        
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            padding: 14px 28px;
            font-size: 1rem;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            padding: 12px 24px;
            font-size: 0.95rem;
            width: 100%;
            max-width: 250px;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 70%;
        padding: 12px 18px;
        font-size: 1.1rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: 90%;
        padding: 10px 16px;
        font-size: 1rem;
    }
`