'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Terminal, Mail, MessageSquare, User, AlertCircle } from 'lucide-react'
import CodeHeader from './CodeHeader'
import { toast } from 'react-hot-toast'

interface FormField {
  value: string;
  error: string;
  touched: boolean;
}

interface FormData {
  name: FormField;
  email: FormField;
  message: FormField;
}

export default function Contact() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [isSending, setIsSending] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  
  const [formData, setFormData] = useState<FormData>({
    name: { value: '', error: '', touched: false },
    email: { value: '', error: '', touched: false },
    message: { value: '', error: '', touched: false }
  })

  const commands = {
    help: () => [
      'Available commands:',
      '  help     - Show this help message',
      '  clear    - Clear the terminal',
      '  send     - Open contact form',
      '  contact  - Show contact information',
      '  email    - Copy email address',
      '  social   - Show social links'
    ],
    clear: () => [],
    contact: () => [
      'Contact Information:',
      '  Email: abhishek03chaurasia@gmail.com',
      '  GitHub: github.com/Abhithecoder03',
      '  LinkedIn: linkedin.com/in/abhichaurasia03/',
    ],
    send: () => {
      setShowForm(true)
      return ['Opening contact form...']
    },
    email: () => {
      navigator.clipboard.writeText('abhishek03chaurasia@gmail.com')
      return ['Email copied to clipboard!']
    },
    social: () => [
      'Social Links:',
      '• GitHub: https://github.com/Abhithecoder03',
      '• LinkedIn: https://www.linkedin.com/in/abhichaurasia03/',
      '• LeetCode: https://leetcode.com/u/abhithecoder01/'
    ]
  }

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name is too short' : ''
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : ''
      case 'message':
        return value.length < 10 ? 'Message is too short' : ''
      default:
        return ''
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    const error = validateField(field, value)
    setFormData(prev => ({
      ...prev,
      [field]: { value, error, touched: true }
    }))
  }

  const handleCommand = async (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    setHistory(prev => [...prev, `> ${cmd}`])

    if (command in commands) {
      const result = await commands[command as keyof typeof commands]()
      setHistory(prev => [...prev, ...result])
    } else {
      setHistory(prev => [...prev, 'Command not recognized. Type "help" for available commands.'])
    }

    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    let hasErrors = false
    Object.entries(formData).forEach(([field, data]) => {
      const error = validateField(field, data.value)
      if (error) hasErrors = true
      handleInputChange(field as keyof FormData, data.value)
    })

    if (hasErrors) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSending(true)
    
    try {
      // Here you would typically send the actual email
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated delay
      
      toast.success('Message sent successfully!')
      setShowForm(false)
      setFormData({
        name: { value: '', error: '', touched: false },
        email: { value: '', error: '', touched: false },
        message: { value: '', error: '', touched: false }
      })
      handleCommand('Message sent successfully! ✓')
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  useEffect(() => {
    setHistory([
      'Welcome to contact terminal!',
      "Type 'help' for available commands.",
    ])
  }, [])

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-lg">
          <CodeHeader filename="contact.tsx" icon={<Terminal className="w-4 h-4 text-[#569cd6]" />} />
          
          <div className="p-6 space-y-4">
            {/* Terminal Output */}
            <div 
              ref={terminalRef}
              className="font-mono text-sm bg-[#2d2d2d] p-4 rounded-lg h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3c3c3c] scrollbar-track-transparent"
            >
              {history.map((line, i) => (
                <div key={i} className="text-[#d4d4d4]">{line}</div>
              ))}
            </div>

            {/* Contact Form */}
            <AnimatePresence>
              {showForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="flex items-center gap-2 text-[#9cdcfe] mb-2 font-mono">
                      <User className="w-4 h-4" />
                      name:
                    </label>
                    <input
                      type="text"
                      value={formData.name.value}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full bg-[#2d2d2d] text-[#d4d4d4] border ${
                        formData.name.error && formData.name.touched ? 'border-red-500' : 'border-[#3c3c3c]'
                      } rounded px-3 py-2 font-mono focus:outline-none focus:border-[#569cd6]`}
                      placeholder="const name = ''"
                    />
                    {formData.name.error && formData.name.touched && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formData.name.error}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#9cdcfe] mb-2 font-mono">
                      <Mail className="w-4 h-4" />
                      email:
                    </label>
                    <input
                      type="email"
                      value={formData.email.value}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full bg-[#2d2d2d] text-[#d4d4d4] border ${
                        formData.email.error && formData.email.touched ? 'border-red-500' : 'border-[#3c3c3c]'
                      } rounded px-3 py-2 font-mono focus:outline-none focus:border-[#569cd6]`}
                      placeholder="const email = ''"
                    />
                    {formData.email.error && formData.email.touched && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formData.email.error}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#9cdcfe] mb-2 font-mono">
                      <MessageSquare className="w-4 h-4" />
                      message:
                    </label>
                    <textarea
                      value={formData.message.value}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full bg-[#2d2d2d] text-[#d4d4d4] border ${
                        formData.message.error && formData.message.touched ? 'border-red-500' : 'border-[#3c3c3c]'
                      } rounded px-3 py-2 h-32 font-mono resize-none focus:outline-none focus:border-[#569cd6]`}
                      placeholder="const message = ''"
                    />
                    {formData.message.error && formData.message.touched && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formData.message.error}
                      </motion.p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Command Input */}
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCommand(input)
                    setInput('')
                  }
                }}
                className="flex-1 bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c] rounded px-3 py-2 font-mono focus:outline-none focus:border-[#569cd6]"
                placeholder="Type a command..."
              />
              <button
                onClick={handleSubmit}
                disabled={isSending || !showForm}
                className={`
                  px-4 py-2 rounded font-mono flex items-center gap-2
                  ${showForm 
                    ? 'bg-[#569cd6] text-white hover:bg-[#4e8ac7]' 
                    : 'bg-[#2d2d2d] text-[#569cd6] hover:bg-[#3c3c3c]'}
                  transition-colors duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                <Send className="w-4 h-4" />
                {isSending ? 'Sending...' : 'send()'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

