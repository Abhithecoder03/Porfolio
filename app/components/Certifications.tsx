'use client'
import { Award, FileCode2, ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(true)
  
  const certifications = [
    "Hackerrank Certification: Software Engineering, Problem Solving, Problem Solving (Intermediate)",
    "LeetCode: 350+ questions",
    "IIT Kanpur: Python Certification",
    "Awards: 4 Star in HackerRank Problem Solving, 3 Star in Python, 4 Star C",
    "Java Certification Electrocus Solution"
  ]

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden"
      >
        <div className="border-b border-[#3c3c3c] px-4 py-2 flex items-center gap-2">
          <FileCode2 className="w-4 h-4 text-[#569cd6]" />
          <span className="text-[#d4d4d4]">certifications.js</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#4fc1ff]">certifications</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#d4d4d4]">[</span>
          </div>
          
          {isOpen && (
            <div className="pl-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 mb-2"
                >
                  <Award className="w-4 h-4 text-[#569cd6]" />
                  <span className="text-[#ce9178]">"{cert}"</span>
                  {index < certifications.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                </motion.div>
              ))}
            </div>
          )}
          <div className="text-[#d4d4d4]">];</div>
        </div>
      </motion.div>
    </section>
  )
}

