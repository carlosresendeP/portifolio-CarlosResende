import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.neutral[900]};
    width: 100%;
    padding: 2rem 1rem;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 1.5rem 1rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.25rem 0.75rem;
    }
`
export const Content = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        color: ${({ theme }) => theme.colors.neutral[300]};
        display:flex;
        align-items: center;
        gap:8px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 0.75rem;
        padding: 0 0.5rem;
    }
`

export const CopyText = styled.div`
    color: ${({ theme }) => theme.colors.neutral[300]};
    display: flex;
    flex-direction: column; 
    align-items: start;
    justify-content: center;

    
    p {
        margin-top: 2px;
        font-size: 0.875rem;
        line-height: 1.4;
        
        &:first-child {
            margin-bottom: 0.25rem;
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
        
        p {
            font-size: 0.8125rem;
            
            &:first-child {
                margin-bottom: 0.125rem;
            }
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        p {
            font-size: 0.75rem;
            line-height: 1.3;
        }
    }
`

export const LogoContent = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.neutral[100]};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
  
  svg {
    font-size: 1.1rem;
  }
`;