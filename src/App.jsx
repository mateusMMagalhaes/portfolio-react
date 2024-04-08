import Nav from './Componentes/Nav/Nav'
import Hero from './Componentes/Hero/Hero'
import About from './Componentes/About/About'
import Skills from './Componentes/Skills/Skills'
import Footer from './Componentes/Footer/Footer'
import Contact from './Componentes/Contact/Contact'

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <main id="main">
      <About/>
      <Skills/>
      <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
