import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 20px;
  min-height: 100vh;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 20px;
    min-height: auto;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 1280px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
    height: auto;
    padding: 20px 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
    height: auto;
    padding: 10px 0;
  }
`;

export const ImageSection = styled.div`
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: -1;
    width: 100%;
    display: flex;
    justify-content: center;
    display: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 380px;
    margin: 0 auto;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
    height: 300px;
    margin: 0 auto;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    gap: 15px;
  }
`;

export const Greeting = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutral[950]};
  margin: 0;
  font-weight: 500;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const Name = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.neutral[900]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.25rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.875rem;
  }
`;

export const Role = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.neutral[500]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin: 10px 0 20px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.8;
    max-width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.6;
    text-align: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: ${({ theme }) => theme.colors.neutral[900]};
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

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary[600]};
  color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;