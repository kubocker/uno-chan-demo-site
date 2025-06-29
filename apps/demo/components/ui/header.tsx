'use client';

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          kubocchi
        </Link>
        <nav className="hidden space-x-6 md:flex">
          {['Home','Payment of Service','Privacy Policy','Commercial Transaction','Terms of Service'].map((label, i) => (
            <Link
              key={i}
              href={
                label === 'Home' ? '/' : '/' + label.toLowerCase().replace(/\s+/g, '-').replace(/-/g, '-')
              }
              className="text-sm font-medium hover:text-gray-200"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white dark:bg-gray-900 w-72 p-6">
            <button
              aria-label="Close menu"
              className="absolute top-4 right-4 p-1 text-gray-600 dark:text-gray-300"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            {/* <nav className="mt-8 flex flex-col space-y-4">
              {['Home','Payment of Service','Privacy Policy','Commercial Transaction','Terms of Service'].map((label, i) => (
                <Link
                  key={i}
                  href={label === 'Home' ? '/' : '/' + label.toLowerCase().replace(/\s+/g, '-'))
                  className="text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav> */}
          </div>
        </div>
      )}
    </div>
  )
}