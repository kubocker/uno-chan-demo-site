import { defineConfig } from 'unocss'
import unoChanPreset from 'uno-chan'

export default defineConfig({
  presets: [
    unoChanPreset()
  ],
  content: {
    pipeline: {
      include: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    },
  },
})
