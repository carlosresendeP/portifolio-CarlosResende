import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.neutral[950]};
    padding: 80px 20px 40px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 60px 20px 30px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 40px 15px 20px;
    }
`;

export const Header = styled.div`
    max-width: 1280px;
    margin: 0 auto 60px;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-bottom: 40px;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral[100]};
    margin: 0 0 12px 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.75rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.neutral[400]};
    margin: 0;
    font-weight: 400;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

export const SkillsGrid = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 25px;
    }
`;

export const SkillCategory = styled.div`
    background: ${({ theme }) => theme.colors.neutral[900]};
    border-radius: 20px;
    padding: 30px;
    border: 1px solid ${({ theme }) => theme.colors.neutral[800]};
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        border-color: ${({ theme }) => theme.colors.primary[600]};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 25px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 20px;
    }
`;

export const CategoryTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary[600]};
    margin: 0 0 25px 0;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.375rem;
        margin-bottom: 20px;
    }
`;

export const SkillsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.neutral[800]};
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    
    &:hover {
        background: ${({ theme }) => theme.colors.neutral[750]};
        border-color: ${({ theme }) => theme.colors.primary[600]};
        transform: translateX(5px);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 14px;
        gap: 14px;
    }
`;

export const SkillIcon = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary[600]};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.neutral[100]};
    font-size: 1.5rem;
    flex-shrink: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 40px;
        height: 40px;
        font-size: 1.375rem;
    }
`;

export const SkillName = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral[100]};
    margin: 0 0 4px 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`;

export const SkillLevel = styled.span`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ level, theme }) => {
        switch (level) {
            case 'Avançado':
                return theme.colors.primary[400];
            case 'Intermediário':
                return '#fbbf24';
            case 'Básico':
                return '#f87171';
            default:
                return theme.colors.neutral[400];
        }
    }};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
    }
`;