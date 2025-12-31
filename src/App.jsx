import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/AllProjects/index.AllProjects";

import { AuthProvider } from "./contexts/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aqui é onde as rotas filhas serão renderizadas */}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            {/* Rotas com layout padrão */}
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Route>

            {/* Rota de login (sem layout) */}
            {/* <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            /> */}

            {/* Rota admin protegida (sem layout) */}
            {/* <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />*/}
          </Routes> 
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
