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

interface CodeNavigationProps {
  children?: React.ReactNode;
  title?: string;
}

export default function CodeNavigation({ children, title }: CodeNavigationProps) {
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
        '  education        - View education details',
        '  experience       - View work experience',
        '  chess            - View chess profile',
        '  social           - View social links',
        '  goto <section>   - Navigate to section',
        '  minimize         - Minimize terminal',
        '  maximize         - Maximize terminal',
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
        'Hi! I\'m Abhishek Chaurasia',
        'A Full Stack Developer passionate about:',
        '• Building web applications with modern technologies',
        '• Creating responsive and interactive user interfaces',
        '• Writing clean and maintainable code',
        '• Learning new technologies and best practices',
        '',
        'Type "skills" to see my technical skills!'
      ]
    },
    skills: {
      description: 'View my skills',
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        return ['Navigating to skills section...']
      }
    },
    projects: {
      description: 'Browse my projects',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        return ['Navigating to projects section...']
      }
    },
    contact: {
      description: 'Contact information',
      action: () => [
        'Email: abhishek03chaurasia@gmail.com',
        'LinkedIn: abhichaurasia03',
        'GitHub: Abhithecoder03',
        '',
        'Type "social" to view social media links!'
      ]
    },
    social: {
      description: 'View social links',
      action: () => [
        'Social Media Links:',
        '• GitHub: https://github.com/Abhithecoder03',
        '• LinkedIn: https://linkedin.com/in/abhichaurasia03',
        '• Chess.com: https://chess.com/member/TheAbhiChess'
      ]
    },
    education: {
      description: 'View education details',
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
        return ['Navigating to education section...']
      }
    },
    experience: {
      description: 'View work experience',
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        return ['Navigating to experience section...']
      }
    },
    chess: {
      description: 'View chess profile',
      action: () => {
        document.getElementById('chess')?.scrollIntoView({ behavior: 'smooth' })
        return ['Navigating to chess profile...']
      }
    },
    goto: {
      description: 'Navigate to section',
      action: (args: string[]) => {
        const section = args[1]
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          return [`Navigating to ${section} section...`]
        }
        return [`Section '${section}' not found. Available sections: home, skills, projects, experience, education, chess, contact`]
      }
    },
    minimize: {
      description: 'Minimize terminal',
      action: () => {
        setTerminalState('minimized')
        return ['Terminal minimized. Click the terminal icon to restore.']
      }
    },
    maximize: {
      description: 'Toggle maximize terminal',
      action: () => {
        setTerminalState(prev => prev === 'full' ? 'normal' : 'full')
        return ['Terminal size toggled.']
      }
    }
  }

  const handleCommand = (cmd: string) => {
    const args = cmd.toLowerCase().trim().split(' ')
    const command = args[0]

    if (command in commands) {
      const output = commands[command as keyof typeof commands].action(args)
      setHistory(prev => [...prev, {
        command: cmd,
        output,
        timestamp: new Date().toLocaleTimeString()
      }])
    } else if (command) {
      setHistory(prev => [...prev, {
        command: cmd,
        output: [`Command not found: ${command}. Type 'help' for available commands.`],
        timestamp: new Date().toLocaleTimeString()
      }])
    }
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

