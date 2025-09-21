import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.neutral[900]};
    width: 100%;
    padding: 2rem 1rem;
    height: auto;

`
export const Content = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`   

export const Logo = styled.h1`
    color: ${({ theme }) => theme.colors.primary[100]};
    font-size: 1.5rem;
`

export const CopyText = styled.div`
    color: ${({ theme }) => theme.colors.neutral[300]};
`