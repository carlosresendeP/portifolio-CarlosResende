import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          color: "#3b82f6",
        }}
      >
        Carregando...
      </div>
    );
  }

  return !isAuthenticated ? children : <Navigate to="/admin" replace />;
};

export default PublicRoute;
