import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-primary font-body">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
