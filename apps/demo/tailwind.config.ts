import type { Config } from 'tailwindcss'
import animatePlugin from 'tw-animate-css'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}',
  ],
  theme: { extend: {} },
  plugins: [animatePlugin],
}

export default config