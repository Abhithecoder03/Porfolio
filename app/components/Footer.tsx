import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#252526] py-8 text-center">
      <p className="flex items-center justify-center">
        Made with <Heart className="w-5 h-5 mx-2 text-red-500" /> by Abhishek Chaurasia
      </p>
      <p className="mt-2">&copy; 2024 All rights reserved.</p>
    </footer>
  )
}

