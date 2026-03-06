import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
