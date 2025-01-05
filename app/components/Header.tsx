'use client'
import Link from 'next/link'
import { Code2, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1e1e1e] shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-[#569cd6] transition-colors duration-300 hover:text-[#9cdcfe]">
          <Code2 className="w-8 h-8" />
          <span className="text-xl font-bold">Abhishek Chaurasia</span>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-[#d4d4d4]" /> : <Menu className="w-6 h-6 text-[#d4d4d4]" />}
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-[#1e1e1e] p-4 shadow-lg' : 'hidden'}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className="text-[#d4d4d4] hover:text-[#9cdcfe] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

