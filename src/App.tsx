import './App.css'
import NavBar from './components/Nav Bar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
			<Hero />
			<Projects />
			<Skills />
			<About />
			<Contact />
			<Footer />
    </>
  )
}

export default App
