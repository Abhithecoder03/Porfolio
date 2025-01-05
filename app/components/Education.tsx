import { GraduationCap, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#9cdcfe]">Education</h2>
      <div className="space-y-8">
        {[
          {
            school: "Dr. A.P.J Abdul Kalam Technical University",
            location: "Lucknow, India",
            degree: "Computer Science And Engineering, Bachelor of Technology",
            duration: "Sep 2020 - 2024",
            percentage: "8.52 SGPA"
          },
          {
            school: "MGIC",
            location: "Gorakhpur, India",
            degree: "Intermediate",
            duration: "April 2017 - July 2019",
            percentage: "71.6%"
          },
          {
            school: "Divine Public School",
            location: "Gorakhpur, India",
            degree: "High School",
            duration: "April 2016 - July 2017",
            percentage: "8.6 CGPA"
          }
        ].map((edu, index) => (
          <div key={index} className="bg-[#252526] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-[#4ec9b0]">{edu.school}</h3>
            <p className="text-[#569cd6] mb-2">{edu.location}</p>
            <p className="mb-2">{edu.degree}</p>
            <p className="flex items-center mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              {edu.duration}
            </p>
            <p className="flex items-center text-[#ce9178]">
              <GraduationCap className="w-4 h-4 mr-2" />
              Percentage: {edu.percentage}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

