import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header/Header'
import Home from './pages/Home'

import Footer from './components/Footer/Footer'
import Projects from './pages/AllProjects/index.AllProjects'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
