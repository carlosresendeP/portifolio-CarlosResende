import styled from "styled-components";

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary[900]} 0%,
    ${(props) => props.theme.colors.neutral[950]} 100%
  );
  padding: 1rem;
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const LoginTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

export const LoginSubtitle = styled.p`
  color: ${(props) => props.theme.colors.neutral[300]};
  font-size: 0.95rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.neutral[200]};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 0.875rem 1rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary[500]};
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.colors.error};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary[600]} 0%,
    ${(props) => props.theme.colors.primary[700]} 100%
  );
  border: none;
  border-radius: 10px;
  padding: 1rem;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const InfoBox = styled.div`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const InfoTitle = styled.p`
  color: ${(props) => props.theme.colors.primary[400]};
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const InfoText = styled.p`
  color: ${(props) => props.theme.colors.neutral[300]};
  font-size: 0.8rem;
  line-height: 1.4;

  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: ${(props) => props.theme.fonts.code};
    color: ${(props) => props.theme.colors.primary[300]};
  }
`;
