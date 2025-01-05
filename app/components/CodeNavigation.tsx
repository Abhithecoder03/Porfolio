'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Minimize2, Maximize2, Command, ChevronUp } from 'lucide-react'
import CodeHeader from './CodeHeader'

interface CommandHistory {
  command: string;
  output: string[];
  timestamp: string;
}

export default function CodeNavigation() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([])
  const [terminalState, setTerminalState] = useState<'full' | 'normal' | 'minimized' | 'micro'>('normal')
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: {
      description: 'Show available commands',
      action: () => [
        'Available commands:',
        '  help              - Show this help message',
        '  clear            - Clear terminal history',
        '  about            - About me',
        '  skills           - View my skills',
        '  projects         - Browse my projects',
        '  contact          - Contact information',
        '  goto <section>   - Navigate to section',
        '  github           - Open GitHub profile',
        '  linkedin         - Open LinkedIn profile',
        '  minimize         - Minimize terminal',
        '  maximize         - Toggle maximize terminal',
      ]
    },
    clear: {
      description: 'Clear terminal history',
      action: () => {
        setHistory([])
        return []
      }
    },
    about: {
      description: 'About me',
      action: () => [
        'Full Stack Developer with expertise in:',
        '• TypeScript/JavaScript',
        '• React/Next.js',
        '• Node.js/Express',
        '• MongoDB/SQL'
      ]
    },
    github: {
      description: 'Open GitHub profile',
      action: () => {
        window.open('https://github.com/Abhithecoder03', '_blank')
        return ['Opening GitHub profile...']
      }
    },
    linkedin: {
      description: 'Open LinkedIn profile',
      action: () => {
        window.open('https://www.linkedin.com/in/abhichaurasia03/', '_blank')
        return ['Opening LinkedIn profile...']
      }
    }
  }

  const handleCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const args = cmd.toLowerCase().trim().split(' ')
    const command = args[0]

    let output: string[] = []

    if (command === 'goto') {
      const section = args[1]
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        output = [`Navigating to ${section} section...`]
      } else {
        output = [`Section '${section}' not found. Try: home, skills, projects, contact`]
      }
    } else if (command in commands) {
      output = commands[command as keyof typeof commands].action()
    } else if (command) {
      output = [`Command not found: ${command}. Type 'help' for available commands.`]
    }

    setHistory(prev => [...prev, { command: cmd, output, timestamp }])
    setInput('')
  }

  useEffect(() => {
    setHistory([{
      command: '',
      output: [
        'Welcome to my portfolio terminal! 👋',
        "Type 'help' to see available commands.",
      ],
      timestamp: new Date().toLocaleTimeString()
    }])
  }, [])

  const toggleTerminalState = () => {
    const states: ('full' | 'normal' | 'minimized' | 'micro')[] = ['full', 'normal', 'minimized', 'micro']
    const currentIndex = states.indexOf(terminalState)
    const nextIndex = (currentIndex + 1) % states.length
    setTerminalState(states[nextIndex])
  }

  const containerClass = `
    fixed bottom-4 right-4 
    ${terminalState === 'full' ? 'w-full h-full inset-0' : 
      terminalState === 'normal' ? 'w-80 h-80' : 
      terminalState === 'minimized' ? 'w-80 h-12' :
      'w-12 h-12'} 
    bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-lg 
    transition-all duration-300 ease-in-out z-50
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={containerClass}
    >
      {/* Terminal Header */}
      <div className="border-b border-[#3c3c3c] px-4 py-2 flex items-center justify-between bg-[#252526]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#569cd6]" />
          {terminalState !== 'micro' && (
            <span className="text-[#d4d4d4] text-sm font-mono">portfolio-terminal</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {terminalState !== 'micro' && (
            <>
              <button 
                onClick={() => setTerminalState(terminalState === 'minimized' ? 'normal' : 'minimized')}
                className="p-1 hover:bg-[#3c3c3c] rounded transition-colors"
                title={terminalState === 'minimized' ? 'Expand' : 'Minimize'}
              >
                <Minimize2 className="w-4 h-4 text-[#d4d4d4]" />
              </button>
              <button 
                onClick={() => setTerminalState(terminalState === 'full' ? 'normal' : 'full')}
                className="p-1 hover:bg-[#3c3c3c] rounded transition-colors"
                title={terminalState === 'full' ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                <Maximize2 className="w-4 h-4 text-[#d4d4d4]" />
              </button>
            </>
          )}
          <button 
            onClick={() => setTerminalState(terminalState === 'micro' ? 'normal' : 'micro')}
            className="p-1 hover:bg-[#3c3c3c] rounded transition-colors"
            title={terminalState === 'micro' ? 'Expand Terminal' : 'Minimize to Icon'}
          >
            <ChevronUp className={`w-4 h-4 text-[#d4d4d4] transition-transform ${terminalState === 'micro' ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <AnimatePresence>
        {terminalState !== 'micro' && terminalState !== 'minimized' && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="p-4 font-mono text-sm overflow-y-auto"
            style={{ height: terminalState === 'full' ? 'calc(100vh - 40px)' : '312px' }}
            ref={terminalRef}
          >
            {/* Command History */}
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.command && (
                  <div className="flex items-center gap-2 text-[#d4d4d4]">
                    <span className="text-[#569cd6]">❯</span>
                    <span>{entry.command}</span>
                    <span className="text-[#6a9955] ml-auto text-xs">{entry.timestamp}</span>
                  </div>
                )}
                {entry.output.map((line, i) => (
                  <div key={i} className="text-[#d4d4d4] ml-4">
                    {line}
                  </div>
                ))}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 text-[#d4d4d4]">
              <span className="text-[#569cd6]">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && input.trim()) {
                    handleCommand(input)
                  }
                }}
                className="flex-1 bg-transparent border-none outline-none"
                placeholder="Type a command..."
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

