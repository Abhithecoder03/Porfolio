import Header from './components/Header'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import CodeEditor from './components/CodeEditor'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CodeNavigation from './components/CodeNavigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <Hero />
        <Terminal />
        <CodeEditor />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CodeNavigation />
    </div>
  )
}

