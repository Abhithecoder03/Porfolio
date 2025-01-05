'use client'
import { Briefcase, Calendar, ChevronDown, ChevronRight, FileCode2 } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  const [openFiles, setOpenFiles] = useState<string[]>(['experience'])
  
  const experiences = [
    {
      company: "IfStatic",
      role: "Full Stack Web Development Internship",
      duration: "Oct 2023 - April 2024",
      achievements: [
        "Acquired proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js) during an intensive internship at IfStatic",
        "Contributed to the development of RESTful APIs for a gym application, managing user accounts, workout plans, and class schedules",
        "Collaborated with the team to integrate authentication and authorization mechanisms, ensuring data security and user privacy",
        "Played a key role in enhancing the design and front-end of a Mehandi Application, contributing to improved user experience and visual appeal"
      ]
    },
    {
      company: "Aspireit",
      role: "Full Stack Web Development Internship",
      duration: "28 April - 31 july 2024",
      achievements: [
        "Developed the front-end for Aspireit using React and Tailwind CSS to ensure a seamless user experience and responsive design",
        "Back-End Design Assistance Contributed to the basic design of the back-end, particularly for the student-related features",
         "Collaborated with the team to integrate the back-end into several front-end componentsensuring proper functionality and alignment with project goals",
       
      ]
    }
  ]

  const toggleFile = (id: string) => {
    setOpenFiles(prev => 
      prev.includes(id) 
        ? prev.filter(fileId => fileId !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden"
      >
        <div className="border-b border-[#3c3c3c] px-4 py-2 flex items-center gap-2">
          <FileCode2 className="w-4 h-4 text-[#569cd6]" />
          <span className="text-[#d4d4d4]">experience.ts</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-2">
            <button 
              onClick={() => toggleFile('experience')}
              className="focus:outline-none"
            >
              {openFiles.includes('experience') ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#4ec9b0]">experiences</span>:{" "}
            <span className="text-[#4ec9b0]">Experience</span>[]
            <span className="text-[#d4d4d4]"> = [</span>
          </div>
          
          {openFiles.includes('experience') && experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="pl-8"
            >
              <span className="text-[#d4d4d4]">{"{"}</span>
              <div className="pl-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#569cd6]" />
                  <span className="text-[#9cdcfe]">company</span>:{" "}
                  <span className="text-[#ce9178]">"{exp.company}"</span>,
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9cdcfe]">role</span>:{" "}
                  <span className="text-[#ce9178]">"{exp.role}"</span>,
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#569cd6]" />
                  <span className="text-[#9cdcfe]">duration</span>:{" "}
                  <span className="text-[#ce9178]">"{exp.duration}"</span>,
                </div>
                <div>
                  <span className="text-[#9cdcfe]">achievements</span>: [
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="pl-4">
                      <span className="text-[#ce9178]">"{achievement}"</span>
                      {achIndex < exp.achievements.length - 1 && ','}
                    </div>
                  ))}
                  ]
                </div>
              </div>
              <span className="text-[#d4d4d4]">{"}"}{index < experiences.length - 1 && ','}</span>
            </motion.div>
          ))}
          <div className="text-[#d4d4d4]">];</div>
        </div>
      </motion.div>
    </section>
  )
}

