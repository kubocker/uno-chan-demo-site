import { Preset, Rule } from 'unocss'

const fadeInRule: Rule = [
  /^animation-fadeIn-(\d+)ms$/,
  ([, d]) => ({
    animation: `fadeIn ${d}ms ease-in-out`,
    'animation-fill-mode': 'both',
  }),
]

const unoChanPreset = (): Preset => ({
  name: 'uno-chan',
  rules: [fadeInRule],
  preflights: [
    {
      getCSS: () => `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `,
    },
  ],
})

export default unoChanPreset
