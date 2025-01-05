'use client'

import { ExternalLink, Github, Code2, ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  const [openProjects, setOpenProjects] = useState<string[]>([])

  const projects = [
    {
      id: "eduverse",
      title: "Eduverse Learning Management System",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W3NkEYjavddx6nLMgPzULP45bw3e69.png",
      technologies: "HTML, CSS, JS, NodeJS, Express, MongoDB",
      description: [
        "Eduverse, a Learning Management System providing free access to engineering courses for students.",
        "Implemented an AI-based Doubt Resolution System using OpenAI GPT-3 API allowing students to receive timely assistance.",
        "Designed and developed a Library Section featuring point-wise content generation for an enhanced learning experience."
      ],
      link: "https://edu-verse-three.vercel.app/",
      github: "https://github.com/Abhithecoder03/EduVerse"
    },
    {
      id: "podcast1",
      title: "Podcast SaaS Platform",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EFYQ6UybB6bpA15zllNsrJVHQpggVB.png",
      technologies: "NEXTJS, ShadCn, CONVEX, CLERK",
      description: [
        "Developed a SaaS podcast application using Next.js, Tailwind CSS, Convex, and Clerk.",
        "Implemented AI-driven features for generating dynamic thumbnails and converting text to voice.",
        "Delivered a scalable SaaS platform with a seamless user experience for content creators."
      ],
      link: "https://podcast-rose.vercel.app/",
      github: "https://github.com/Abhithecoder03/PODCAST"
    },
    {
      id: "chat",
      title: "Socket.io Real-Time Chat Application",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EFYQ6UybB6bpA15zllNsrJVHQpggVB.png",
      technologies: "TypeScript, React, NodeJs, MongoDb",
      description: [
        "Real-Time Communication using MERN stack and Socket.io for instant messaging.",
        "Authentication with JWT: Employed JSON Web Tokens (JWT) for secure user authentication.",
        "Successfully integrated group chat capabilities, enabling users to participate in multi-user conversations."
      ],
      link: "#",
      github: "https://github.com/rajat00/WebRTC-Audio-Video-Chat"
    }
  ]

  const toggleProject = (id: string) => {
    setOpenProjects((prev) =>
      prev.includes(id)
        ? prev.filter((projectId) => projectId !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden"
      >
        <div className="border-b border-[#3c3c3c] px-4 py-2 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#569cd6]" />
          <span className="text-[#d4d4d4]">projects.ts</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#4ec9b0]">projects</span>:{" "}
            <span className="text-[#4ec9b0]">Project</span>[]
            <span className="text-[#d4d4d4]"> = [</span>
          </div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="pl-4 mb-4"
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleProject(project.id)}
                  className="focus:outline-none"
                >
                  {openProjects.includes(project.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                <span className="text-[#9cdcfe]">{project.title}</span>:{" "}
                <span className="text-[#d4d4d4]">{"{"}</span>
              </div>
              {openProjects.includes(project.id) && (
                <div className="pl-4">
                  <div>
                    <span className="text-[#9cdcfe]">image</span>:{" "}
                    <span className="text-[#ce9178]">"{project.image}"</span>,
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">technologies</span>:{" "}
                    <span className="text-[#ce9178]">"{project.technologies}"</span>,
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">description</span>: [
                    {project.description.map((desc, descIndex) => (
                      <div key={descIndex} className="pl-4">
                        <span className="text-[#ce9178]">"{desc}"</span>
                        {descIndex < project.description.length - 1 && ","}
                      </div>
                    ))}
                    ],
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">link</span>:{" "}
                    <span className="text-[#ce9178]">"{project.link}"</span>,
                  </div>
                  <div>
                    <span className="text-[#9cdcfe]">github</span>:{" "}
                    <span className="text-[#ce9178]">"{project.github}"</span>
                  </div>
                  <div className="mt-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={150}
                      className="rounded-md"
                    />
                  </div>
                </div>
              )}
              <div className="text-[#d4d4d4]">
                {"}"}
                {index < projects.length - 1 && ","}
              </div>
            </motion.div>
          ))}
          <div className="text-[#d4d4d4]">];</div>
        </div>
      </motion.div>
    </section>
  )
}

