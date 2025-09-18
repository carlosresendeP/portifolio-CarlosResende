import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.primary[200]};
    margin-top: 40px;
    padding: 15px 10px;
    max-width: 50%;
    color: ${({ theme }) => theme.colors.neutral[100]};
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

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

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[600]};
        border: 2px solid ${({ theme }) => theme.colors.primary[600]};
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
`