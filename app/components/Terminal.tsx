'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Command {
  input: string
  output: string | JSX.Element
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [showPrompt, setShowPrompt] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  const availableCommands = {
    help: 'Available commands: help, about, skills, projects, contact, clear',
    about: 'Hi! I\'m Abhishek Chaurasia, a Full Stack Developer passionate about building web applications.',
    skills: (
      <div>
        <p>🔹 Frontend: React.js, Next.js, TypeScript, Tailwind CSS</p>
        <p>🔹 Backend: Node.js, Express.js, MongoDB</p>
        <p>🔹 Tools: Git, Docker, AWS</p>
      </div>
    ),
    projects: (
      <div>
        <p>🚀 Project 1: E-commerce Platform (MERN Stack)</p>
        <p>🚀 Project 2: Real-time Chat Application (Socket.io)</p>
        <p>🚀 Project 3: Portfolio Website (Next.js)</p>
        <p>Type 'github' to visit my repository</p>
      </div>
    ),
    contact: 'Email: abhishek03chaurasia@gmail.com | LinkedIn: abhichaurasia03',
    github: 'Redirecting to GitHub...',
    clear: 'CLEAR_COMMAND'
  }

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim()
    
    if (normalizedCmd === 'clear') {
      setCommands([])
      return
    }

    if (normalizedCmd === 'github') {
      window.open('https://github.com/Abhithecoder03', '_blank')
    }

    const output = availableCommands[normalizedCmd as keyof typeof availableCommands] || 
      'Command not found. Type "help" for available commands.'

    setCommands(prev => [...prev, { input: cmd, output }])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      handleCommand(currentInput)
      setCurrentInput('')
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  // Initial welcome message
  useEffect(() => {
    const welcomeMessage = {
      input: 'welcome',
      output: (
        <div className="space-y-1">
          <p className="text-green-400">Welcome to my interactive terminal! 👋</p>
          <p>Type &apos;help&apos; to see available commands</p>
        </div>
      )
    }
    setCommands([welcomeMessage])
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1e1e1e] rounded-lg border border-[#3c3c3c] shadow-xl w-full max-w-3xl mx-auto"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] rounded-t-lg border-b border-[#3c3c3c]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        <span className="ml-2 text-sm text-[#d4d4d4]">visitor@portfolio:~</span>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-4 h-[400px] overflow-y-auto font-mono text-sm"
      >
        {commands.map((command, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[#27c93f]">➜</span>
              <span className="text-[#4fc1ff]">~/portfolio</span>
              <span className="text-[#d4d4d4]">$ {command.input}</span>
            </div>
            <div className="ml-6 text-[#d4d4d4]">{command.output}</div>
          </div>
        ))}
        
        {/* Current Input Line */}
        <div className="flex items-center gap-2">
          <span className="text-[#27c93f]">➜</span>
          <span className="text-[#4fc1ff]">~/portfolio</span>
          <span className="text-[#d4d4d4]">$</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-[#d4d4d4]"
            autoFocus
          />
        </div>
      </div>
    </motion.div>
  )
}

