'use client'
import { Award, FileCode2, ChevronDown, ChevronRight, ExternalLink, Check } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CodeHeader from './CodeHeader'

interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
  verificationUrl?: string
  skills: string[]
}

export default function Certifications() {
  const [isOpen, setIsOpen] = useState(true)
  const [hoveredCert, setHoveredCert] = useState<string | null>(null)
  
  const certifications: Certification[] = [
    {
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "2023",
      credentialId: "PSI-2023",
      verificationUrl: "https://www.hackerrank.com/certificates/...",
      skills: ["Data Structures", "Algorithms", "Time Complexity"]
    },
    {
      title: "Python Programming",
      issuer: "IIT Kanpur",
      date: "2022",
      credentialId: "PY-2022",
      verificationUrl: "https://...",
      skills: ["Python"]
    },
    {
      title: "Java Programming",
      issuer: "Electrocus Solution",
      date: "2022",
      credentialId: "JAVA-2022",
      skills: ["Java"]
    },
    {
      title: "LeetCode Problem Solving",
      issuer: "LeetCode",
      date: "2023",
      skills: ["350+ Problems Solved", "Data Structures", "Algorithms"]
    }
  ]

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-lg">
          <CodeHeader 
            filename="certifications.ts" 
            icon={<Award className="w-4 h-4 text-[#569cd6]" />} 
          />
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none transition-transform transform hover:scale-110"
              >
                {isOpen ? 
                  <ChevronDown className="w-5 h-5 text-[#569cd6]" /> : 
                  <ChevronRight className="w-5 h-5 text-[#569cd6]" />
                }
              </button>
              <span className="text-[#c586c0]">const</span>{" "}
              <span className="text-[#4fc1ff]">certifications</span>{" "}
              <span className="text-[#d4d4d4]">=</span>{" "}
              <span className="text-[#d4d4d4]">[</span>
            </div>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pl-8"
                >
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredCert(cert.title)}
                      onMouseLeave={() => setHoveredCert(null)}
                      className={`
                        relative bg-[#2d2d2d] rounded-lg p-4 
                        border border-transparent
                        ${hoveredCert === cert.title ? 'border-[#569cd6]' : ''}
                        transition-all duration-300
                        hover:shadow-lg
                      `}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-[#569cd6]" />
                          <div>
                            <h3 className="text-[#4fc1ff] font-semibold">{cert.title}</h3>
                            <p className="text-[#ce9178] text-sm">{cert.issuer}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[#6a9955] text-sm">{cert.date}</span>
                          {cert.verificationUrl && (
                            <a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#569cd6] hover:text-[#4fc1ff] transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + i * 0.1 }}
                              className="px-2 py-1 bg-[#264f78] text-[#d4d4d4] rounded text-sm flex items-center gap-1"
                            >
                              <Check className="w-3 h-3" />
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {cert.credentialId && (
                        <div className="mt-2 text-[#6a9955] text-sm">
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="text-[#d4d4d4] mt-4">];</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

