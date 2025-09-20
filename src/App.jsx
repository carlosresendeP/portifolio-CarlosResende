import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Header/Header'
import Home from './pages/Home'
import About from './pages/About/Index.About'
import Contact from './pages/Contact/index.Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
