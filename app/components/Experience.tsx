'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight, MapPin, ExternalLink, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import CodeHeader from './CodeHeader'

interface Experience {
  company: string
  role: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  link?: string
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const experiences: Experience[] = [
    {
      company: "IfStatic",
      role: "Full Stack Web Development Internship", 
      duration: "Oct 2023 - April 2024",
      location: "Remote",
      description: [
        "Acquired proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js) during an intensive internship at IfStatic",
        "Contributed to the development of RESTful APIs for a gym application, managing user accounts, workout plans, and class schedules",
        "Collaborated with the team to integrate authentication and authorization mechanisms, ensuring data security and user privacy",
        "Played a key role in enhancing the design and front-end of a Mehandi Application, contributing to improved user experience and visual appeal"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "REST APIs", "Authentication"],
      link: "https://ifstatic.com"
    },
    {
      company: "Aspireit",
      role: "Full Stack Web Development Internship",
      duration: "28 April - 31 july 2024", 
      location: "Remote",
      description: [
        "Developed the front-end for Aspireit using React and Tailwind CSS to ensure a seamless user experience and responsive design",
        "Back-End Design Assistance Contributed to the basic design of the back-end, particularly for the student-related features",
        "Collaborated with the team to integrate the back-end into several front-end components ensuring proper functionality and alignment with project goals"
      ],
      technologies: ["React", "Tailwind CSS", "Backend Development"],
      link: "https://aspireit.com"
    },
    {
      company: "Freelance",
      role: "Web Developer",
      duration: "2022 - Present",
      location: "Remote",
      description: [
        "Built custom websites and web applications for clients",
        "Managed multiple projects simultaneously",
        "Implemented SEO best practices",
        "Provided maintenance and support"
      ],
      technologies: ["Next.js", "React", "TailwindCSS", "Node.js", "MongoDB"],
    }
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-lg">
          <CodeHeader 
            filename="experience.tsx" 
            icon={<Briefcase className="w-4 h-4 text-[#569cd6]" />} 
          />
          
          <div className="p-6">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(exp.company)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    relative bg-[#2d2d2d] rounded-lg overflow-hidden
                    border border-transparent
                    ${hoveredId === exp.company ? 'border-[#569cd6]' : ''}
                    transition-all duration-300
                  `}
                >
                  {/* Timeline Connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 bottom-0 w-0.5 h-6 bg-[#3c3c3c] -mb-6 z-0" />
                  )}
                  
                  <div 
                    onClick={() => setExpandedId(expandedId === exp.company ? null : exp.company)}
                    className="p-4 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-[#569cd6]">
                          {expandedId === exp.company ? 
                            <ChevronDown className="w-5 h-5" /> : 
                            <ChevronRight className="w-5 h-5" />
                          }
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-[#4fc1ff] font-semibold">{exp.role}</h3>
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#569cd6] hover:text-[#4fc1ff]"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <p className="text-[#ce9178]">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-[#6a9955] text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedId === exp.company && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 space-y-4"
                        >
                          <div className="flex items-center gap-2 text-[#d4d4d4] text-sm">
                            <MapPin className="w-4 h-4 text-[#9cdcfe]" />
                            {exp.location}
                          </div>

                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-[#d4d4d4] text-sm flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#569cd6] mt-1.5" />
                                {item}
                              </motion.li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="px-2 py-1 bg-[#264f78] text-[#d4d4d4] rounded text-sm"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

