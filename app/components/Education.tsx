'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, ChevronRight, ChevronDown, MapPin, Award, Book } from 'lucide-react';
import { useState } from 'react';
import CodeHeader from './CodeHeader';

interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  courses: string[];
  achievements?: string[];
}

export default function Education() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const education: Education[] = [
    {
      id: 'btech',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Dr APJ Abdul Kalam Technical University',
      location: 'Lucknow, UP',
      year: '2020 - 2024',
      grade: '8.5 SGPA',
      courses: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Management',
        'Computer Networks',
        'Web Development'
      ],
      achievements: [
        'Department Rank 3',
        
        'Won coding competition'
      ]
    },
    {
      id: 'intermediate',
      degree: 'Intermediate (XII)',
      field: 'PCM',
      institution: 'MGIC',
      location: 'Gorakhpur, UP',
      year: '2017 - 2019',
      grade: '71.6%',
      courses: ['Physics', 'Chemistry', 'Mathematics'],
      achievements: [
        'School topper in Mathematics',
        'Science exhibition winner'
      ]
    },
    {
      id: 'highschool',
      degree: 'High School (X)',
      field: 'General',
      institution: 'Divine Public School',
      location: 'Gorakhpur, UP',
      year: '2016 - 2017',
      grade: '82%',
      courses: ['Science', 'Mathematics', 'Social Studies'],
      achievements: [
        'Perfect attendance award',
        'Mathematics Olympiad finalist'
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-lg">
          <CodeHeader 
            filename="education.tsx" 
            icon={<GraduationCap className="w-4 h-4 text-[#569cd6]" />} 
          />
          
          <div className="p-6">
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(edu.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    bg-[#2d2d2d] rounded-lg overflow-hidden
                    border border-transparent
                    ${hoveredId === edu.id ? 'border-[#569cd6]' : ''}
                    transition-colors duration-300
                  `}
                >
                  <div 
                    onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
                    className="p-4 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-[#569cd6]">
                          {expandedId === edu.id ? 
                            <ChevronDown className="w-5 h-5" /> : 
                            <ChevronRight className="w-5 h-5" />
                          }
                        </div>
                        <div>
                          <h3 className="text-[#4fc1ff] font-semibold">{edu.degree}</h3>
                          <p className="text-[#ce9178] text-sm">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#6a9955] text-sm">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === edu.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-[#3c3c3c]"
                      >
                        <div className="p-4 space-y-4">
                          <div className="flex items-center gap-2 text-[#d4d4d4]">
                            <MapPin className="w-4 h-4 text-[#9cdcfe]" />
                            {edu.location}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Book className="w-4 h-4 text-[#9cdcfe]" />
                              <span className="text-[#9cdcfe]">Courses</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {edu.courses.map((course, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="text-[#d4d4d4] text-sm flex items-center gap-2"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#569cd6]" />
                                  {course}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {edu.achievements && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Award className="w-4 h-4 text-[#9cdcfe]" />
                                <span className="text-[#9cdcfe]">Achievements</span>
                              </div>
                              <div className="space-y-2">
                                {edu.achievements.map((achievement, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-[#d4d4d4] text-sm flex items-center gap-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ec9b0]" />
                                    {achievement}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex items-center gap-2 text-[#d4d4d4]">
                            <div className="px-2 py-1 bg-[#264f78] rounded text-sm">
                              Grade: {edu.grade}
                            </div>
                            <div className="px-2 py-1 bg-[#264f78] rounded text-sm">
                              {edu.field}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

