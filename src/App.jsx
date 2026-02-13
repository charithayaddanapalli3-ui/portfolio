import { Navbar, Hero, Footer } from './components/common'
import { Projects, About } from './components/sections'
import { Contact } from './components/contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-secondary to-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
