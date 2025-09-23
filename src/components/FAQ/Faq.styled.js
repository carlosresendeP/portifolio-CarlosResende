import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    padding: 80px 20px 40px;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 60px 20px 30px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 40px 15px 20px;
    }
`;

export const Content = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
    align-items: start;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 50px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 40px;
    }
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
        gap: 30px;
    }
`;

export const RightSection = styled.div`
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral[900]};
    margin: 0;
    line-height: 1.2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.75rem;
    }
`;

export const Description = styled.p`
    font-size: 1.125rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.neutral[700]};
    margin: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        line-height: 1.6;
    }
`;

export const QuestionSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ContactSection = styled.div`
    background: ${({ theme }) => theme.colors.neutral[50]};
    padding: 30px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 25px;
    }
`;

export const ContactTitle = styled.h3`
    font-size: 1.375rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral[900]};
    margin: 0 0 15px 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.25rem;
    }
`;

export const ContactDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.neutral[700]};
    margin: 0 0 25px 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.95rem;
        margin-bottom: 20px;
    }
`;

export const ContactButton = styled.button`
    background: ${({ theme }) => theme.colors.primary[600]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    padding: 14px 28px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.colors.primary[700]};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        padding: 12px 24px;
        font-size: 0.95rem;
    }
`;

export const QuestionTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral[900]};
    margin: 0 0 25px 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.125rem;
        margin-bottom: 20px;
    }
`;

export const FaqItem = styled.div`
    background: ${({ theme }) => theme.colors.neutral[50]};
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:hover {
        border-color: ${({ theme }) => theme.colors.primary[600]};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }
`;

export const FaqQuestion = styled.button`
    width: 100%;
    padding: 20px 24px;
    background: transparent;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral[900]};
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.colors.neutral[100]};
    }
    
    span {
        flex: 1;
        padding-right: 15px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 18px 20px;
        font-size: 1rem;
        
        span {
            padding-right: 10px;
        }
    }
`;

export const FaqAnswer = styled.div`
    padding: ${({ isOpen }) => isOpen ? '0 24px 20px 24px' : '0 24px'};
    max-height: ${({ isOpen }) => isOpen ? '200px' : '0'};
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.neutral[700]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ isOpen }) => isOpen ? '0 20px 18px 20px' : '0 20px'};
        font-size: 0.95rem;
        line-height: 1.5;
    }
`;

export const ChevronIcon = styled.div`
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
`;