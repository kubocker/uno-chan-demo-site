'use client'

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 左側ロゴとサブタイトル */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-black transition">
            uno chan demo site
          </Link>
          <span className="text-sm text-gray-500">with unocss animations</span>
        </div>

        {/* 右側アクションエリア */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-700">寄付してください！</span>
          <Link href="" className="p-2 rounded-full hover:bg-gray-100 transition">
            <img src="/coffee.svg" alt="coffee" className="w-6 h-6" />
          </Link>
          <Link href="" className="p-2 rounded-full hover:bg-gray-100 transition">
            <img src="/book.svg" alt="book" className="w-6 h-6" />
          </Link>
          <Link href="" className="p-2 rounded-full hover:bg-gray-100 transition">
            <img src="/device-gamepad-2.svg" alt="gamepad" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}
