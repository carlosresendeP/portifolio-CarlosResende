import { VscLightbulbSparkle } from "react-icons/vsc";
import styled from "styled-components";

export const LogoStleyd = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const Logo= ()=>{


    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
        }
  };

    return(
        <>
            <LogoStleyd onClick={() => handleScrollTo('home')}>
                <VscLightbulbSparkle/> CarlosResende
            </LogoStleyd>
        </>
    )
}