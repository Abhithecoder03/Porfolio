'use client';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Shapes, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 55 },
        { name: "TypeScript", level: 55 },
        { name: "Tailwind CSS", level: 90 },
      ],
      color: "bg-blue-500",
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "GraphQL", level: 20 },
      ],
      color: "bg-green-500",
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 60 },
        { name: "PostgreSQL", level: 10 },
        
      ],
      color: "bg-yellow-500",
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "Java", level: 20 },
        { name: "C++", level: 10 },
      ],
      color: "bg-purple-500",
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Postman", level: 75 },
        { name: "AWS", level: 30 },
        { name: "DSA", level: 75 },
      ],
      color: "bg-red-500",
    },
    {
      title: "Other Skills",
      icon: <Shapes className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "Team Work", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Agile", level: 80 },
      ],
      color: "bg-indigo-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#4fc1ff] mb-4">Skills & Expertise</h2>
          <p className="text-[#d4d4d4] max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies across various domains of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#2d2d2d] rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color} bg-opacity-20`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#d4d4d4]">{skill.name}</span>
                      <span className="text-[#569cd6]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#1e1e1e] rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
