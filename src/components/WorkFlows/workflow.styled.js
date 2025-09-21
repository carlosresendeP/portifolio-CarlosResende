import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    padding: 80px 20px 40px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 60px 20px 30px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 40px 15px 20px;
    }
`;

export const HeaderWork = styled.div`
    max-width: 1280px;
    margin: 0 auto 60px;
    text-align: left;
    
    h2 {
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.neutral[900]};
        margin: 0;
        
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: 2rem;
            text-align: center;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: 1.75rem;
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
        margin-bottom: 40px;
    }
`;

export const ContentWork = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const WorkflowItem = styled.div`
    background: ${({ theme }) => theme.colors.neutral[50]};
    border-radius: 16px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-color: ${({ theme }) => theme.colors.primary[600]};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 25px;
        align-items: center;
        text-align: center;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 20px;
    }
`;

export const StepNumber = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral[600]};
    margin-bottom: -10px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-bottom: 0;
    }
`;

export const StepIcon = styled.div`
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.colors.primary[400]};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.neutral[100]};
    font-size: 1.25rem;
    margin-bottom: 5px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 45px;
        height: 45px;
        font-size: 1.125rem;
    }
`;

export const StepContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        align-items: center;
    }
`;

export const StepTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral[900]};
    margin: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.125rem;
    }
`;

export const StepDescription = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.neutral[700]};
    margin: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
`;

// Manter compatibilidade com o nome antigo
export const ContentCard = styled.div``;
export const Contentcard = styled.div``;