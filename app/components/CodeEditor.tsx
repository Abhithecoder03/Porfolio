'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CodeEditor() {
  const [activeTab, setActiveTab] = useState('about.js')
  
  const files = {
    'about.js': `const aboutMe = {
  name: 'Abhishek Chaurasia',
  role: 'Full Stack Developer',
  location: 'Gorakhpur, India',
  interests: [
    'Web Development',
    'System Design',
    'Problem Solving'
  ],
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript'],
    backend: ['Node.js', 'Express', 'MongoDB'],
    other: ['Git', 'Docker', 'AWS']
  }
};`,
    'contact.js': `const contact = {
  email: 'abhishek03chaurasia@gmail.com',
  phone: '9696858107',
  social: {
    github: 'https://github.com/Abhithecoder03',
    linkedin: 'https://www.linkedin.com/in/abhichaurasia03/',
    leetcode: 'https://leetcode.com/u/abhithecoder01/'
  }
};`
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden mb-12"
    >
      <div className="flex border-b border-[#3c3c3c]">
        {Object.keys(files).map((filename) => (
          <button
            key={filename}
            onClick={() => setActiveTab(filename)}
            className={`px-4 py-2 text-sm ${
              activeTab === filename
                ? 'bg-[#252526] text-white border-t-2 border-[#569cd6]'
                : 'text-[#8c8c8c] hover:bg-[#2d2d2d]'
            }`}
          >
            {filename}
          </button>
        ))}
      </div>
      <div className="p-4 font-mono text-sm relative">
        <div className="absolute left-0 top-0 bottom-0 flex flex-col items-end px-4 py-4 text-[#858585] select-none">
          {files[activeTab].split('\n').map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="pl-12">
          <code className="text-[#d4d4d4]">{files[activeTab]}</code>
        </pre>
      </div>
    </motion.div>
  )
}

