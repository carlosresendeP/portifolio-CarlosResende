import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;



const shimmer = keyframes`
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
`;

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    /* background: linear-gradient(180deg, 
        ${({ theme }) => theme.colors.neutral[950]} 0%,
        ${({ theme }) => theme.colors.neutral[900]} 50%,
        ${({ theme }) => theme.colors.neutral[950]} 100%
    ); */
    padding: 100px 20px 80px;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 300px;
        /* background: radial-gradient(circle at 50% 0%, 
            ${({ theme }) => theme.colors.primary[600]}15 0%,
            transparent 70%
        ); */
        pointer-events: none;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 80px 20px 60px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 60px 15px 40px;
    }
`;

export const Header = styled.div`
    max-width: 1280px;
    margin: 0 auto 80px;
    text-align: left;
    animation: ${fadeInUp} 0.8s ease-out;
    position: relative;
    z-index: 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-bottom: 60px;
    }
`;

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.neutral[50]};
    background-clip: text;
    margin: 0 0 5px 0;
    letter-spacing: -0.02em;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.75rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.25rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral[400]};
    margin: 0;
    font-weight: 400;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.1rem;
    }
`;

export const SkillsGrid = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    position: relative;
    z-index: 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const SkillCategory = styled.div`
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.neutral[900]}95 0%,
        ${({ theme }) => theme.colors.neutral[800]}90 100%
    );
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 40px 32px;
    border: 1px solid ${({ theme }) => theme.colors.neutral[800]};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    animation: ${fadeInUp} 0.6s ease-out forwards;
    animation-delay: ${({ index }) => index * 0.1}s;
    opacity: 0;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.colors.primary[600]} 0%,
            ${({ theme }) => theme.colors.primary[400]} 50%,
            ${({ theme }) => theme.colors.secondary[500]} 100%
        );
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
    }
    
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 24px;
        padding: 1px;
        background: linear-gradient(135deg, 
            ${({ theme }) => theme.colors.primary[600]}40,
            transparent
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    
    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px ${({ theme }) => theme.colors.primary[600]}30;
        border-color: ${({ theme }) => theme.colors.primary[600]}60;
        
        &::before {
            transform: scaleX(1);
        }
        
        &::after {
            opacity: 1;
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 32px 24px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 28px 20px;
    }
`;

export const CategoryTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.primary[500]} 0%,
        ${({ theme }) => theme.colors.secondary[400]} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 32px 0;
    text-align: center;
    position: relative;
    padding-bottom: 16px;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, 
            transparent 0%,
            ${({ theme }) => theme.colors.primary[600]} 50%,
            transparent 100%
        );
        border-radius: 2px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.5rem;
        margin-bottom: 24px;
    }
`;

export const SkillsList = styled.div`
    display: grid;
    gap: 14px;
`;

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 18px 20px;
    background: ${({ theme }) => theme.colors.neutral[800]}60;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${({ theme }) => theme.colors.neutral[700]}40;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg,
            transparent,
            ${({ theme }) => theme.colors.primary[600]}20,
            transparent
        );
        transition: left 0.5s ease;
    }
    
    &:hover {
        background: ${({ theme }) => theme.colors.neutral[700]}80;
        border-color: ${({ theme }) => theme.colors.primary[600]}60;
        transform: translateX(8px);
        box-shadow: 
            -4px 0 0 ${({ theme }) => theme.colors.primary[600]},
            0 8px 24px rgba(0, 0, 0, 0.3);
        
        &::before {
            left: 100%;
        }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 16px 18px;
        gap: 16px;
    }
`;

export const SkillIcon = styled.div`
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.primary[600]} 0%,
        ${({ theme }) => theme.colors.primary[700]} 100%
    );
    border-radius: 14px;
    color: ${({ theme }) => theme.colors.neutral[50]};
    font-size: 1.75rem;
    flex-shrink: 0;
    box-shadow: 
        0 4px 12px ${({ theme }) => theme.colors.primary[600]}40,
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    
    ${SkillItem}:hover & {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 
            0 8px 20px ${({ theme }) => theme.colors.primary[600]}60,
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 50px;
        height: 50px;
        font-size: 1.6rem;
    }
`;

export const SkillInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const SkillName = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral[100]};
    margin: 0;
    transition: color 0.3s ease;
    
    ${SkillItem}:hover & {
        color: ${({ theme }) => theme.colors.primary[300]};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.05rem;
    }
`;

export const SkillLevelContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SkillLevel = styled.span`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ $level, theme }) => {
        switch ($level) {
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
    text-transform: uppercase;
    letter-spacing: 0.05em;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
    }
`;

export const ProgressBar = styled.div`
    flex: 1;
    height: 6px;
    background: ${({ theme }) => theme.colors.neutral[700]};
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${({ $level }) => {
        switch ($level) {
            case 'Avançado':
                return '90%';
            case 'Intermediário':
                return '60%';
            case 'Básico':
                return '30%';
            default:
                return '0%';
        }
    }};
        background: ${({ $level, theme }) => {
        switch ($level) {
            case 'Avançado':
                return `linear-gradient(90deg, ${theme.colors.primary[500]}, ${theme.colors.primary[400]})`;
            case 'Intermediário':
                return 'linear-gradient(90deg, #f59e0b, #fbbf24)';
            case 'Básico':
                return 'linear-gradient(90deg, #ef4444, #f87171)';
            default:
                return theme.colors.neutral[400];
        }
    }};
        border-radius: 10px;
        transition: width 1s ease-out;
        box-shadow: 0 0 10px currentColor;
        
        ${SkillItem}:hover & {
            animation: ${shimmer} 2s linear infinite;
            background-size: 200% 100%;
        }
    }
`;