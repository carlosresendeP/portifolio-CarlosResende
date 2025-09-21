import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.neutral[800]};
  text-align: center;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral[700]};
  transition: all 0.25s ease;
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[100]};
    transform: translateX(10px);
    border-color: ${({ theme }) => theme.colors.primary[300]};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const ContactText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;