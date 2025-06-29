'use client';

import Link from "next/link"
import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-6 sm:flex-row sm:justify-between sm:space-y-0">
        <p className="text-sm">&copy; {year} kubocchi.com. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="https://github.com/kubocker" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://twitter.com/kubocker" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:info@kubocchi.com" className="hover:text-white">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}