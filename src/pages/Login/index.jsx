import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import {
  LoginContainer,
  LoginCard,
  LoginHeader,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  InfoBox,
  InfoTitle,
  InfoText,
} from "./login.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validação básica
    if (!username || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);

    // Simular delay de autenticação
    setTimeout(() => {
      const result = login(username, password);

      if (result.success) {
        navigate("/admin", { replace: true });
      } else {
        setError(result.error);
      }

      setIsLoading(false);
    }, 500);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <LoginTitle>Área Administrativa</LoginTitle>
          <LoginSubtitle>Faça login para gerenciar seu portfólio</LoginSubtitle>
        </LoginHeader>

        <LoginForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Usuário</Label>
            <Input
              id="username"
              type="text"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              autoComplete="username"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              autoComplete="current-password"
            />
          </FormGroup>

          {error && (
            <ErrorMessage>
              <span>⚠️</span>
              {error}
            </ErrorMessage>
          )}

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </SubmitButton>
        </LoginForm>
        
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
