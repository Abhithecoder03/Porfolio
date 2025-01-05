'use client';
import { Code, Database, PenToolIcon as Tool, Library, FolderOpen } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [text, setText] = useState('');
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillCategories = useMemo(
    () => [
      {
        title: "Programming Languages",
        icon: <Code className="w-4 h-4" />,
        skills: ["C", "Python", "Java", "JavaScript", "HTML", "CSS"]
      },
      {
        title: "Libraries/Frameworks",
        icon: <Library className="w-4 h-4" />,
        skills: ["React", "Express", "Mongoose", "EJS", "Material-UI", "Node.js", "tailwindcss", "NextJs", "jQuery", "typescript", "regex", "Bootstrap"]
      },
      {
        title: "Tools / Platforms",
        icon: <Tool className="w-4 h-4" />,
        skills: ["Git", "GitHub", "DSA", "OOPS", "Figma", "MS office", "Postman"]
      },
      {
        title: "Databases",
        icon: <Database className="w-4 h-4" />,
        skills: ["MongoDB", "MySQL"]
      }
    ],
    []
  );

  const allSkills = useMemo(
    () => skillCategories.flatMap(category => category.skills.map(skill => `${category.title}: ${skill}`)).join(', '),
    [skillCategories]
  );

  useEffect(() => {
    if (showAllSkills) return;

    const typingInterval = setInterval(() => {
      if (text.length < allSkills.length) {
        setText(prev => allSkills.slice(0, prev.length + 1));
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowAllSkills(true), 1000);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [text, showAllSkills, allSkills]);

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden"
      >
        <div className="border-b border-[#3c3c3c] px-4 py-2 flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-[#569cd6]" />
          <span className="text-[#d4d4d4]">skills.ts</span>
        </div>
        <div className="p-4 font-mono text-sm h-64 overflow-y-auto">
          <div className="text-[#d4d4d4]">
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#4fc1ff]">skills</span>{" "}
            <span className="text-[#d4d4d4]">= [</span>
          </div>
          <div className="pl-4 text-[#ce9178] whitespace-pre-wrap">
            "{text}"
            {!showAllSkills && <span className="animate-blink">|</span>}
          </div>
          <div className="text-[#d4d4d4]">];</div>
          {showAllSkills && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-4 text-[#569cd6]">// Skills categorized:</div>
              {skillCategories.map((category, index) => (
                <div key={index} className="mt-2">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="text-[#4fc1ff] font-semibold">{category.title}:</span>
                  </div>
                  <div className="pl-4 flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-[#ce9178]">"{skill}"</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
