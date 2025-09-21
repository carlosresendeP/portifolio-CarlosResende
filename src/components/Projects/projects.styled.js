import styled from "styled-components";
import { Link } from "react-router";

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

export const Header = styled.header`
  max-width: 1280px;
  margin: 0 auto 60px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin: 0 0 8px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin: 0;
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 60px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 40px;
  }
`;

export const ProjectsList = styled.div`
  display: flex;
  height: 100%;
  align-items: center; 
  justify-content: center;
  gap: 60px;
  background: ${({ theme }) => theme.colors.neutral[100]};
  padding: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px;
    padding: 30px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
    gap: 20px;
  }
`;

export const ImgProject = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
border-radius: 12px;
  
  img {
    width: 100%;
    height: 350px;
    max-height: 400px;
    object-fit: cover;
    border-radius: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-height: 300px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-height: 250px;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: none;
    width: 100%;
  }
`;

export const TextProject = styled.div`
  flex: 1;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  height: 350px;

  
  h2 {
    font-size: 2rem;
    font-weight: 450;
    color: ${({ theme }) => theme.colors.neutral[900]};
    margin: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.75rem;
      text-align: center;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    gap: 15px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  span {
    background: ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.primary[800]};
    border: 1px solid ${({ theme }) => theme.colors.primary[300]};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    white-space: nowrap;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin: 10px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    font-size: 1rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral[900]};
  border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.neutral[900]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    border-color: ${({ theme }) => theme.colors.neutral[900]};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }

`;

export const FinalButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  padding: 20px 40px;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral[900]};
  border: 2px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary[700]};
    border-color: ${({ theme }) => theme.colors.primary[700]};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.colors.neutral[100]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 30px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 30px;
    width: 100%;
    max-width: 280px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeIn 0.3s ease;
`;

export const ModalCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.primary[400]};
  max-width: 400px;
  animation: fadeIn 0.3s ease;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 90%;
    padding: 15px 20px;
  }
`;

export const ModalText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary[600]};
  font-weight: 600;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;