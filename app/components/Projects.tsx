'use client'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, ExternalLink, Github, Layout, Search, Tag, X } from 'lucide-react'
import CodeHeader from './CodeHeader'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl: string
  featured: boolean
  stats: {
    stars: number
    forks: number
    issues: number
  }
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const projects: Project[] = [
    {
      title: "Eduverse Learning Management System",
      description: [
        "Eduverse, a Learning Management System providing free access to engineering courses for students.",
        "Implemented an AI-based Doubt Resolution System using OpenAI GPT-3 API allowing students to receive timely assistance.",
        "Designed and developed a Library Section featuring point-wise content generation for an enhanced learning experience."
      ].join(" "),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W3NkEYjavddx6nLMgPzULP45bw3e69.png",
      tags: ["HTML", "CSS", "JS", "NodeJS", "Express", "MongoDB", "OpenAI"],
      liveUrl: "https://edu-verse-three.vercel.app/",
      githubUrl: "https://github.com/Abhithecoder03/EduVerse",
      featured: true,
      stats: {
        stars: 100,
        forks: 50,
        issues: 10
      }
    },
    {
      title: "Podcast SaaS Platform",
      description: [
        "Developed a SaaS podcast application using Next.js, Tailwind CSS, Convex, and Clerk.",
        "Implemented AI-driven features for generating dynamic thumbnails and converting text to voice.",
        "Delivered a scalable SaaS platform with a seamless user experience for content creators."
      ].join(" "),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EFYQ6UybB6bpA15zllNsrJVHQpggVB.png",
      tags: ["Next.js", "ShadCn", "CONVEX", "CLERK", "AI", "Tailwind"],
      liveUrl: "https://podcast-rose.vercel.app/",
      githubUrl: "https://github.com/Abhithecoder03/PODCAST",
      featured: true,
      stats: {
        stars: 80,
        forks: 30,
        issues: 5
      }
    },
    {
      title: "Socket.io Real-Time Chat Application",
      description: [
        "Real-Time Communication using MERN stack and Socket.io for instant messaging.",
        "Authentication with JWT: Employed JSON Web Tokens (JWT) for secure user authentication.",
        "Successfully integrated group chat capabilities, enabling users to participate in multi-user conversations."
      ].join(" "),
      image: "/socket.png",
      tags: ["TypeScript", "React", "NodeJs", "MongoDB", "Socket.io", "JWT"],
      githubUrl: "https://github.com/rajat00/WebRTC-Audio-Video-Chat",
      featured: false,
      stats: {
        stars: 70,
        forks: 20,
        issues: 3
      }
    },
    {
      title: "Portfolio Website",
      description: "Portfolio Website in Next.js with Tailwind and Shadcn UI in theme of a console where you can navigate through the website using commands",
      image: "/portfolio.png",
      tags: ["Next.js", "Tailwind", "Shadcn"],
      githubUrl: "https://github.com/Abhithecoder03/portfolio",
      featured: false,
      stats: {
        stars: 70,
        forks: 20,
        issues: 3
      }
    },
    {
      title: "Prompt Verse",
      description: "Prompt Verse is a platform for creating, sharing, and discovering AI prompts. It allows users to create prompts, share them with others, and discover new prompts.",
      image: "/prompt.png",
      tags: ["Next.js", "Tailwind", "Shadcn"],
      githubUrl: "https://github.com/Abhithecoder03/PromptVerse",
      featured: false,
      stats: {
        stars: 70,
        forks: 20,
        issues: 3
      }
    }, {
      title:"AI Chatbot",
      description: "AI Chatbot using OpenAI API and React with Tailwind and Material UI for styling and fetching data from the API and using axios for API calls",
      image: "/chatbot.png",
      tags: ["React", "Tailwind", "Js",'OpenAI','axios'],
      githubUrl: "https://github.com/Abhithecoder03/chatbot",
      featured: false,
      stats: {
        stars: 70,
        forks: 20,
        issues: 3
      }
    }, {
      title:"Weather App",
      description: "Weather App using OpenWeather API and React with Tailwind and Material UI for styling and fetching data from the API",
      image: "/weather.png",
      tags: ["React", "Tailwind", "Material UI"],
      githubUrl: "https://github.com/Abhithecoder03/weather-js",
      featured: false,
      stats: {
        stars: 70,
        forks: 20,
        issues: 3
      }
    }, {
      title: "Todo App",
      description: "Todo App using React and Tailwind with CRUD operations and authentication using auth0 google login",
      image: "/todo.png",
      tags: ["React", "Tailwind", "Material UI"],
      githubUrl: "https://github.com/Abhithecoder03/To-do-MERN",
      featured: false,
      stats: {
        stars: 70,
        forks: 20,
        issues: 3
      }
    }
  ]

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach(project => project.tags.forEach(tag => tags.add(tag)))
    return Array.from(tags)
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTag = !selectedTag || project.tags.includes(selectedTag)
      return matchesSearch && matchesTag
    })
  }, [projects, searchQuery, selectedTag])

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-lg">
          <CodeHeader 
            filename="projects.tsx" 
            icon={<Code className="w-4 h-4 text-[#569cd6]" />} 
          />
          
          <div className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6a9955]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#2d2d2d] text-[#d4d4d4] border border-[#3c3c3c] rounded pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#569cd6]"
                  placeholder="Search projects..."
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4d4d4] hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#264f78] text-white' : 'text-[#d4d4d4]'}`}
                >
                  <Layout className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#264f78] text-white' : 'text-[#d4d4d4]'}`}
                >
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`
                    px-3 py-1 rounded-full text-sm flex items-center gap-1
                    ${selectedTag === tag 
                      ? 'bg-[#569cd6] text-white' 
                      : 'bg-[#2d2d2d] text-[#d4d4d4] hover:bg-[#3c3c3c]'}
                    transition-colors
                  `}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </button>
              ))}
            </div>

            {/* Projects Grid/List */}
            <div className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'}
            `}>
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredProject(project.title)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`
                      relative bg-[#2d2d2d] rounded-lg overflow-hidden
                      border border-transparent
                      ${hoveredProject === project.title ? 'border-[#569cd6]' : ''}
                      transition-all duration-300
                      ${viewMode === 'list' ? 'flex gap-4' : ''}
                    `}
                  >
                    {/* Project Image */}
                    <div className={`
                      relative overflow-hidden
                      ${viewMode === 'list' ? 'w-48' : 'w-full pt-[56.25%]'}
                    `}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-[#569cd6] text-white text-xs rounded">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-4 flex-1">
                      <h3 className="text-[#4fc1ff] font-semibold mb-2">{project.title}</h3>
                      <p className="text-[#d4d4d4] text-sm mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#264f78] text-[#d4d4d4] rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d4d4d4] hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#d4d4d4] hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center text-[#d4d4d4] py-8">
                No projects found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

