'use client'
import { Mail, Phone, MapPin, Github, Linkedin, Code } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-[#569cd6]">
          <Image
            src="https://i.ibb.co/61Gs9ZR/1709573831210.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-[#9cdcfe]"
          >
            Abhishek Chaurasia
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl text-[#4ec9b0] mb-6"
          >
            Full-Stack Developer
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
          >
            <a href="mailto:abhishek03chaurasia@gmail.com" className="flex items-center hover:text-[#9cdcfe] transition-colors duration-300">
              <Mail className="w-5 h-5 mr-2" />
              abhishek03chaurasia@gmail.com
            </a>
            <a href="tel:9696858107" className="flex items-center hover:text-[#9cdcfe] transition-colors duration-300">
              <Phone className="w-5 h-5 mr-2" />
              9696858107
            </a>
            <span className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Gorakhpur, Uttar Pradesh
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

