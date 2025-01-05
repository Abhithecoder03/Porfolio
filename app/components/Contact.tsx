'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email using a server-side API
    console.log('Sending email:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
    alert('Message sent successfully!')
  }

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden max-w-2xl mx-auto"
      >
        <div className="border-b border-[#3c3c3c] px-4 py-2 flex items-center gap-2">
          <Send className="w-4 h-4 text-[#569cd6]" />
          <span className="text-[#d4d4d4]">contact.tsx</span>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#9cdcfe] mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c] rounded px-3 py-2 focus:outline-none focus:border-[#569cd6]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#9cdcfe] mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c] rounded px-3 py-2 focus:outline-none focus:border-[#569cd6]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#9cdcfe] mb-2">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c] rounded px-3 py-2 h-32 resize-none focus:outline-none focus:border-[#569cd6]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#569cd6] text-white px-4 py-2 rounded hover:bg-[#4e8ac7] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}

