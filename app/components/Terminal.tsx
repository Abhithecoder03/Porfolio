'use client'
import { useState, useEffect } from 'react'
import { TerminalIcon } from 'lucide-react'

export default function Terminal() {
  const [text, setText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  
  const fullText = `> Abhishek.currentStatus
"Open to opportunities"
> Abhishek.location
"Gorakhpur, India"
> Abhishek.skills.length
"10+ technologies"
> Abhishek.interests
["Web Development", "Problem Solving", "System Design"]
> _`

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 50)

    const cursorEffect = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingEffect)
      clearInterval(cursorEffect)
    }
  }, [])

  return (
    <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-4 mb-8 font-mono text-sm">
      <div className="flex items-center gap-2 mb-2">
        <TerminalIcon className="w-4 h-4 text-[#569cd6]" />
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
      </div>
      <pre className="text-[#d4d4d4]">
        <code>
          {text}
          {cursorVisible && <span className="opacity-100">▋</span>}
        </code>
      </pre>
    </div>
  )
}

