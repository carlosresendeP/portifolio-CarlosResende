import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    margin: 0 auto;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        p{
            font-size: 1.4rem;
        }
        h2{
            color: ${({ theme }) => theme.colors.error};
        }
    }
`