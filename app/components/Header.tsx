'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Github, Linkedin, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1e1e1e]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-[#569cd6]" />
            <span className="text-[#d4d4d4] font-mono text-xl">Abhishek.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors font-mono"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Abhithecoder03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhichaurasia03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#d4d4d4]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#1e1e1e] border-t border-[#3c3c3c]"
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="py-2 text-[#d4d4d4] hover:text-[#569cd6] transition-colors font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/Abhithecoder03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhichaurasia03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

