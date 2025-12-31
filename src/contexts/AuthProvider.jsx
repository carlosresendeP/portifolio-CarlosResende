import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Credenciais hardcoded (apenas para demonstração)
  const ADMIN_CREDENTIALS = {
    username: import.meta.env.VITE_ADMIN_USERNAME,
    password: import.meta.env.VITE_ADMIN_PASSWORD,
  };

  // Verificar autenticação ao carregar
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");

    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth);
        setIsAuthenticated(true);
        setUser(authData.user);
      } catch (error) {
        console.error("Error parsing auth data:", error);
        localStorage.removeItem("auth");
      }
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const userData = {
        username: username,
        name: "Carlos",
        email: "carlosresende.paula@gmail.com",
      };

      setIsAuthenticated(true);
      setUser(userData);

      // Salvar no localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: userData,
        })
      );

      return { success: true };
    }

    return { success: false, error: "Credenciais inválidas" };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("auth");
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
