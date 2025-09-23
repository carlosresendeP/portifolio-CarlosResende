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
    align-items: flex-start;
    justify-content: space-between;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        align-items: center;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 1.5rem;
        padding: 0 0.5rem;
    }
`

export const CopyText = styled.div`
    color: ${({ theme }) => theme.colors.neutral[300]};
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    justify-content: center;

    
    p {
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.5;
        
        &:first-child {
            margin-bottom: 0.5rem;
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        align-items: center;
        text-align: center;
        
        p {
            font-size: 0.8125rem;
            
            &:first-child {
                margin-bottom: 0.25rem;
            }
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        p {
            font-size: 0.75rem;
            line-height: 1.4;
        }
    }
`

export const LogoContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.75rem;

    p {
        color: ${({ theme }) => theme.colors.neutral[300]};
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
        font-size: 0.875rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        align-items: center;
        text-align: center;
        
        p {
            justify-content: center;
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 0.5rem;
        
        p {
            font-size: 0.8125rem;
        }
    }
`

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin: 0.75rem 0;
    flex-wrap: wrap;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        justify-content: center;
        gap: 0.75rem;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: 0.5rem;
        margin: 0.5rem 0;
    }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral[100]};
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
    background-color: ${({ theme }) => theme.colors.neutral[800]};
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    
    svg {
      font-size: 0.9rem;
    }
  }
`;