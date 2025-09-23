import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    padding: 40px 20px;
    position: relative;

    .background-effect {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 100%;
        z-index: -1;
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
        filter: blur(2px);
        opacity: 0.3;

        background-image: 
        linear-gradient(
            0deg,
            transparent 24%,
            ${({ theme }) => theme.colors.neutral[800]} 25%,
            ${({ theme }) => theme.colors.neutral[800]} 26%,
            
            transparent 27%,
            transparent 74%,
            ${({ theme }) => theme.colors.neutral[800]} 75%,
            ${({ theme }) => theme.colors.neutral[800]} 76%,
            transparent 77%,
            transparent
        ),
        linear-gradient(
            90deg,
            transparent 24%,
            ${({ theme }) => theme.colors.neutral[800]} 25%,
            ${({ theme }) => theme.colors.neutral[800]} 26%,
            transparent 27%,
            transparent 74%,
            ${({ theme }) => theme.colors.neutral[800]} 75%,
            ${({ theme }) => theme.colors.neutral[800]} 76%,
            transparent 77%,
            transparent
        );
        background-size: 100px 105px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 30px 15px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 20px 15px;
        min-height: 80vh;
    }
`;

export const Content = styled.div`
    max-width: 1280px;
    width: 80%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.neutral[950]};
    border-radius: 20px;
    padding: 60px 40px;
    gap: 30px;
    position: relative;
    z-index: 2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 500px;
        padding: 50px 30px;
        gap: 25px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: auto;
        min-height: 400px;
        padding: 40px 25px;
        gap: 20px;
        border-radius: 16px;
    }

    
`;

export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, ${({ theme }) => theme.colors.neutral[900]} 0%, transparent 60%);
        opacity: 0.6;
    }
`

export const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral[100]};
    margin: 0;
    line-height: 1.2;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.75rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2.25rem;
        line-height: 1.3;
    }
`;

export const Description = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.neutral[300]};
    margin: 0;
    line-height: 1.6;
    text-align: center;
    max-width: 600px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.125rem;
        max-width: 500px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        line-height: 1.5;
        max-width: 100%;
    }
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.colors.primary[400]};
    font-weight: 600;
`;