import styled, { keyframes } from 'styled-components';


const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

const imageAnimation = keyframes`
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-10px);
  }
`

export const Container = styled.div`
  max-width: 1080px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.neutral[950]};
  
  .background-effect {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    mix-blend-mode: overlay;
    filter: blur(2px);
    opacity: 0.1;

  background-image: 
  linear-gradient(
    0deg,
    transparent 24%,
    ${({ theme }) => theme.colors.neutral[600]} 25%,
    ${({ theme }) => theme.colors.neutral[600]} 26%,
    
    transparent 27%,
    transparent 74%,
    ${({ theme }) => theme.colors.neutral[600]} 75%,
    ${({ theme }) => theme.colors.neutral[600]} 76%,
    transparent 77%,
    transparent
  ),
  linear-gradient(
    90deg,
    transparent 24%,
    ${({ theme }) => theme.colors.neutral[600]} 25%,
    ${({ theme }) => theme.colors.neutral[600]} 26%,
    transparent 27%,
    transparent 74%,
    ${({ theme }) => theme.colors.neutral[600]} 75%,
    ${({ theme }) => theme.colors.neutral[600]} 76%,
    transparent 77%,
    transparent
  );
  background-size: 100px 105px;
  
  animation: backgroundMove 20s linear infinite;

    @keyframes backgroundMove {
      0% { background-position: 0 0; }
      100% { background-position: 0px 105px; }

    }
} 

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
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: transparent;
  z-index: 2;

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
    flex-direction: column;
    gap: 40px;
    text-align: center;
   }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`

export const ContentText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: start;
  text-align: left;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    width: 100%;
    text-align: center;
    padding: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    align-items: center;
    text-align: center;
    padding: 15px;
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 650;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.neutral[100]};
  min-height: 1.2em;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: left;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
    justify-content: center;
    text-align: center;
  }
  
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    justify-content: center;
    text-align: center;
  }
`;

export const TypewriterText = styled.span`
  position: relative;
  
  &::after {
    content: '|';
    color: ${({ theme }) => theme.colors.neutral[600]};
    opacity: 0.6;
    animation: ${blink} 1s infinite;
    margin-left: 2px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.neutral[500]};
  margin: 0 auto;
  line-height: 1.8;
  text-align: left;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary[600]};
  font-weight: 600;
`;

export const IntroText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral[500]};
  margin-bottom: 1rem;
  font-weight: 500;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.125rem;
    text-align: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  /* Remove o margin-top dos botões filhos quando estão no container */
  button {
    margin-top: 0;
    flex: 1;
    max-width: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    
    button {
      max-width: 200px;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
    
    button {
      width: 100%;
      max-width: 280px;
    }
  }
`;

export const ImageContent = styled.div`
    background-color: ${({ theme }) => theme.colors.neutral[700]};
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${imageAnimation} 3s ease-in-out infinite alternate;
    border-radius: 10px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
      max-width: 400px;
      margin: 20px auto;
    }

    div{
      width: 100%;
      height: 550px;
      overflow: hidden;
      
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 400px;
      }
      
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 300px;
      }
    }
`

export const PersonImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top ;
    border-radius: 10px;
`