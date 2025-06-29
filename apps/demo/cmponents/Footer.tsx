'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* 左側: ロゴと説明 */}
        <div className="flex items-start gap-4">
          <img
            src="https://kubocchi-official.assets.newt.so/v1/77c2b108-09b9-433e-b7c7-004b465adb1d/DALL%C2%B7E2024-07-1223.26.32-AverysimpleandcleancoverimageforaCoconalaaccountwiththeusername'kubocchidev'.Thecovershouldconveythattheuserisafront-endengin.jpg"
            alt="icon"
            width={48}
            height={48}
            className="rounded-md object-cover"
          />
          <p className="text-sm font-medium mt-1">
            uno chan demo site
            {/* <br />Providing reliable tech since 1992 */}
          </p>
        </div>

        {/* 右側: リンク一覧 */}
        <div>
          <h2 className="text-base font-semibold mb-3">Legal</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/specified_commercial_transaction_act" className="hover:underline">
                特定商取引法
              </Link>
            </li>
            <li>
              <Link href="/terms_of_service" className="hover:underline">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/payment_of_service" className="hover:underline">
                資金決済法
              </Link>
            </li>
            <li>
              <Link href="/privacy_policy" className="hover:underline">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
