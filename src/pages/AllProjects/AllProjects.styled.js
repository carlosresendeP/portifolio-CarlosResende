import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  padding: 40px 20px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 1280px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 15px;
  }
  
`

export const Header = styled.header`
  max-width: 1280px;
  margin: 0 auto 60px;
  text-align: left;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;
    gap: 20px;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
    width: 100%;
  }
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[50]};
    border-color: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.primary[700]};
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 1rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 8px 12px;
    
    svg {
      font-size: 0.9rem;
    }
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

export const Search = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin: 0;

  form {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 1rem;
    outline: none;
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-weight: 600;
    min-width: 300px;
    transition: all 0.3s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary[400]};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[100]};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral[400]};
      font-weight: 300;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-width: 250px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      min-width: 200px;
      font-size: 0.9rem;
    }
  }

  button {
    font-size: 1.2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.neutral[600]};
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary[400]};
      color: ${({ theme }) => theme.colors.neutral[100]};
      border: 1px solid ${({ theme }) => theme.colors.primary[300]};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    form {
      flex-direction: column;
      gap: 12px;
    }
    
    button {
      width: 100%;
      max-width: 200px;
    }
  }
`;

export const SearchResults = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin: 8px 0 0 0;
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.neutral[600]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 15px;
  }
`;

export const NoResultsTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin: 0 0 16px 0;
  font-weight: 600;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const NoResultsText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin: 0;
  line-height: 1.5;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto 40px;
  padding: 20px;
`


export const ContentGrid = styled.div`
  max-width: 1280px;
  padding: 20px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.neutral[700]};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 450px;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 400px;
  }
`;

export const ImgProject = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

export const TextProject = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  height: 100%;
  justify-content: space-between;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral[100]};
    margin: 0 0 8px 0;
    line-height: 1.4;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
    gap: 10px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0;
  
  span {
    background: ${({ theme }) => theme.colors.primary[600]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4px;
    
    span {
      font-size: 0.7rem;
      padding: 3px 6px;
    }
  }
`;

export const Description = styled.div`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral[300]};
  margin: 0;
  flex: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    line-height: 1.5;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 6px;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral[100]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[600]};
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
    border-color: ${({ theme }) => theme.colors.primary[600]};
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 0.875rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 6px 10px;
    font-size: 0.7rem;
    
    svg {
      font-size: 0.8rem;
    }
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