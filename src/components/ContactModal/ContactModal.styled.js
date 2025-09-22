import styled from "styled-components";

// Modal Components
export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeIn 0.3s ease;
`;

export const ModalCard = styled.div`
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    border-radius: 16px;
    padding: 40px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 30px;
        border-radius: 12px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 20px;
        margin: 10px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.neutral[500]};
    padding: 5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.colors.neutral[200]};
        color: ${({ theme }) => theme.colors.neutral[700]};
    }
`;

export const ModalTitle = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.neutral[900]};
    margin-bottom: 10px;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.75rem;
    }
`;

export const ModalSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.neutral[600]};
    text-align: center;
    margin-bottom: 30px;
    line-height: 1.6;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.95rem;
        margin-bottom: 25px;
    }
`;

export const Form = styled.form`
    display: grid;
    gap: 20px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral[800]};
    font-size: 0.95rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    outline: none;
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary[400]};
        background-color: ${({ theme }) => theme.colors.neutral[100]};
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.neutral[500]};
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    outline: none;
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    cursor: pointer;
    
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary[400]};
        background-color: ${({ theme }) => theme.colors.neutral[100]};
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    outline: none;
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
    
    &:focus {
        border-color: ${({ theme }) => theme.colors.primary[400]};
        background-color: ${({ theme }) => theme.colors.neutral[100]};
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.neutral[500]};
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    justify-content: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CancelButton = styled.button`
    padding: 12px 24px;
    border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.colors.neutral[600]};
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutral[200]};
        border-color: ${({ theme }) => theme.colors.neutral[400]};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        max-width: 200px;
    }
`;

export const SubmitButton = styled.button`
    padding: 12px 32px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary[600]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[700]};
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
    }
    
    &:disabled {
        background-color: ${({ theme }) => theme.colors.neutral[400]};
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        max-width: 200px;
    }
`;

export const ErrorMessage = styled.span`
    color: ${({ theme }) => theme.colors.red || '#ef4444'};
    font-size: 0.875rem;
    margin-top: 4px;
    display: block;
`;