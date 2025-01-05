'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

export default function CodeNavigation() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const command = input.toLowerCase().trim()
    
    switch (command) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setOutput('Navigating to Home section...')
        break
      case 'skills':
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        setOutput('Navigating to Skills section...')
        break
      case 'experience':
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        setOutput('Navigating to Experience section...')
        break
      case 'projects':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        setOutput('Navigating to Projects section...')
        break
      case 'contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        setOutput('Navigating to Contact section...')
        break
      case 'help':
        setOutput('Available commands: home, skills, experience, projects, contact, help')
        break
      default:
        setOutput('Command not recognized. Type "help" for available commands.')
    }
    
    setInput('')
  }

  useEffect(() => {
    setOutput('Welcome! Type "help" for available commands.')
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 w-80 bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-lg"
    >
      <div className="border-b border-[#3c3c3c] px-4 py-2 flex items-center gap-2">
        <Terminal className="w-4 h-4 text-[#569cd6]" />
        <span className="text-[#d4d4d4]">navigation.ts</span>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="h-32 overflow-y-auto mb-2 text-[#d4d4d4]">
          {output.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <span className="text-[#569cd6]">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none text-[#d4d4d4] ml-2"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </motion.div>
  )
}

