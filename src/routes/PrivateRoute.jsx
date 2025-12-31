import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Debug: verificar valores
  console.log("PrivateRoute - isAuthenticated:", isAuthenticated);
  console.log("PrivateRoute - loading:", loading);

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

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
