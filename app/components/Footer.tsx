'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Abhithecoder03',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abhichaurasia03/',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'mailto:abhishek03chaurasia@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ]

  return (
    <footer className="bg-[#1e1e1e] border-t border-[#3c3c3c]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#569cd6]">
              <Terminal className="w-6 h-6" />
              <span className="text-lg font-semibold">Abhishek Chaurasia</span>
            </div>
            <p className="text-[#d4d4d4] text-sm">
              Full Stack Developer specializing in modern web technologies and scalable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#4fc1ff] font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-[#d4d4d4] hover:text-[#569cd6] text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-[#4fc1ff] font-semibold">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#3c3c3c] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6a9955] text-sm text-center md:text-left">
            © {currentYear} Abhishek Chaurasia. All rights reserved.
          </p>
          <p className="text-[#d4d4d4] text-sm text-center md:text-right">
            Built with Next.js, TypeScript, and TailwindCSS
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-[#264f78] text-white rounded-full shadow-lg hover:bg-[#569cd6] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

