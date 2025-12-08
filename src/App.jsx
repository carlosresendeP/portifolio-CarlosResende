import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header/Header'
import Home from './pages/Home'

import Footer from './components/Footer/Footer'
import Projects from './pages/AllProjects/index.AllProjects'
// p

const DefaultLayout = () => {
    return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aqui é onde as rotas filhas serão renderizadas */}
      </main>
      <Footer />
    </>
  )

}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
          <Routes element={<DefaultLayout />}>
            {/* Rota com layout padrão */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          
            {/* Rota sem layout padrão */}
            {/* <Route path="/cbitzero" element={<Cbitzero />} /> */}
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
