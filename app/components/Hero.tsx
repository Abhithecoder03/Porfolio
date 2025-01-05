'use client'
import { motion } from 'framer-motion'
import { Terminal, ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link'


export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer"
  ]

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = '/Abhisheknew.pdf' // Make sure this matches your resume file name
    link.download = 'Abhishek_Chaurasia_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-[#569cd6]"
            >
              <Terminal className="w-5 h-5" />
              <span className="text-lg">Hello, I&apos;m</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4fc1ff]"
            >
              Abhishek Chaurasia
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-[#ce9178]"
            >
              <TypewriterComponent
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#d4d4d4] text-lg max-w-xl"
            >
              A passionate fresher developer focused on creating interactive and responsive web applications using modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 bg-[#569cd6] text-white rounded-lg hover:bg-[#4e8ac7] transition-colors"
              >
                Let&apos;s Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-2 px-6 py-3 bg-[#2d2d2d] text-[#569cd6] rounded-lg hover:bg-[#3c3c3c] transition-colors"
              >
                Download CV
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 pt-4"
            >
              {[
                {
                  icon: <Github className="w-5 h-5" />,
                  href: "https://github.com/Abhithecoder03",
                  label: "GitHub"
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  href: "https://www.linkedin.com/in/abhichaurasia03/",
                  label: "LinkedIn"
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  href: "mailto:abhishek03chaurasia@gmail.com",
                  label: "Email"
                }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Photo and Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-48 h-48 mx-auto mb-8"
            >
              <img
                src="/profile.jpg" // Make sure to add your photo to public folder
                alt="Abhishek Chaurasia"
                className="rounded-full object-cover w-full h-full border-4 border-[#569cd6] shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#2d2d2d] p-2 rounded-full border-2 border-[#569cd6]">
                <span className="block w-4 h-4 bg-green-500 rounded-full"></span>
              </div>
            </motion.div>

            {/* Existing Terminal/Code Preview remains same */}
            <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6 shadow-xl">
              <pre className="text-sm md:text-base overflow-x-auto">
                <code>
                  <span className="text-[#c586c0]">const</span>{" "}
                  <span className="text-[#4fc1ff]">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-[#ce9178]">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#9cdcfe]">name</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-[#ce9178]">&apos;Abhishek Chaurasia&apos;</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#9cdcfe]">role</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-[#ce9178]">&apos;Full Stack Developer&apos;</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#9cdcfe]">skills</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-[#ce9178]">[</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#ce9178]">&apos;React.js&apos;</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-[#ce9178]">&apos;Next.js&apos;</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#ce9178]">&apos;Node.js&apos;</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-[#ce9178]">&apos;MongoDB&apos;</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#ce9178]">]</span>
                  <span className="text-white">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#9cdcfe]">status</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-[#ce9178]">&apos;Ready to contribute!&apos;</span>
                  {"\n"}
                  <span className="text-[#ce9178]">{"}"}</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

