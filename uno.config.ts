import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno, 
  transformerDirectives
} from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  shortcuts: [
    { logo: 'i-logos:svelte-icon w-6em h-6em transform transition-800 hover:rotate-180' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        custom: {
          // do not remove LF: testing trimCustomSvg on universal icon loader
          circle: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
<circle cx="60" cy="60" r="50"/>
</svg>
`,
        },
        customfsl: FileSystemIconLoader(
          './icons',
          svg => svg.replace('<svg ', '<svg fill="currentColor" '),
        ),
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    extends: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%, 75%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        flash: {
          '0%, 100%, 50%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
        rubberBand: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.25, 0.75)' },
          '40%': { transform: 'scale(0.75, 1.25)' },
          '50%': { transform: 'scale(1.15, 0.85)' },
          '65%': { transform: 'scale(0.95, 1.05)' },
          '75%': { transform: 'scale(1.05, 0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        jello: {
          '0%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.25, 0.75)' },
          '40%': { transform: 'scale(0.75, 1.25)' },
          '50%': { transform: 'scale(1.15, 0.85)' },
          '65%': { transform: 'scale(0.95, 1.05)' },
          '75%': { transform: 'scale(1.05, 0.95)' },
        },
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        hinge: {
          '0%': { transform: 'rotate(0deg)', transformOrigin: 'top left', opacity: '1' },
          '20%, 60%': { transform: 'rotate(80deg)', transformOrigin: 'top left', opacity: '1' },
          '40%, 80%': { transform: 'rotate(60deg)', transformOrigin: 'top left', opacity: '1' },
          '100%': { transform: 'translateY(700px)', opacity: '0' },
        },
        tada: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%, 80%': { transform: 'scale(1.1) rotate(-3deg)' },
        },
        bounceIn: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceOut: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0', transform: 'scale(0.3)' },
        },
        flipInX: {
          '0%': { transform: 'perspective(400px) rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateX(0)', opacity: '1' },
        },
        flipOutX: {
          '0%': { transform: 'perspective(400px) rotateX(0)', opacity: '1' },
          '100%': { transform: 'perspective(400px) rotateX(90deg)', opacity: '0' },
        },
        flipInY: {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateY(0)', opacity: '1' },
        },
        flipOutY: {
          '0%': { transform: 'perspective(400px) rotateY(0)', opacity: '1' },
          '100%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
        },
        lightSpeedIn: {
          '0%': { transform: 'translateX(100%) skewX(-30deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' },
        },
        lightSpeedOut: {
          '0%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' },
          '100%': { transform: 'translateX(100%) skewX(-30deg)', opacity: '0' },
        },
        rollIn: {
          '0%': { opacity: '0', transform: 'translateX(-100%) rotate(-120deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotate(0deg)' },
        },
        rollOut: {
          '0%': { opacity: '1', transform: 'translateX(0) rotate(0deg)' },
          '100%': { opacity: '0', transform: 'translateX(100%) rotate(120deg)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(100%)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-100%)' },
        },
        fadeOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
        fadeOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        bounceInDown: {
          '0%, 100%': { opacity: '0', transform: 'translateY(-100%)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceInUp: {
          '0%, 100%': { opacity: '0', transform: 'translateY(100%)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceInLeft: {
          '0%, 100%': { opacity: '0', transform: 'translateX(-100%)' },
          '50%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceInRight: {
          '0%, 100%': { opacity: '0', transform: 'translateX(100%)' },
          '50%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceOutDown: {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0', transform: 'translateY(100%)' },
        },
        bounceOutUp: {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0', transform: 'translateY(-100%)' },
        },
        bounceOutLeft: {
          '0%, 100%': { opacity: '1', transform: 'translateX(0)' },
          '50%': { opacity: '0', transform: 'translateX(-100%)' },
        },
        bounceOutRight: {
          '0%, 100%': { opacity: '1', transform: 'translateX(0)' },
          '50%': { opacity: '0', transform: 'translateX(100%)' },
        },
        zoomInDown: {
          '0%': { opacity: '0', transform: 'scale(0.1) translateY(-100%)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        zoomInUp: {
          '0%': { opacity: '0', transform: 'scale(0.1) translateY(100%)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        zoomInLeft: {
          '0%': { opacity: '0', transform: 'scale(0.1) translateX(-100%)' },
          '100%': { opacity: '1', transform: 'scale(1) translateX(0)' },
        },
        zoomInRight: {
          '0%': { opacity: '0', transform: 'scale(0.1) translateX(100%)' },
          '100%': { opacity: '1', transform: 'scale(1) translateX(0)' },
        },
        zoomOutDown: {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.1) translateY(100%)' },
        },
        zoomOutUp: {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.1) translateY(-100%)' },
        },
        zoomOutLeft: {
          '0%': { opacity: '1', transform: 'scale(1) translateX(0)' },
          '100%': { opacity: '0', transform: 'scale(0.1) translateX(-100%)' },
        },
        zoomOutRight: {
          '0%': { opacity: '1', transform: 'scale(1) translateX(0)' },
          '100%': { opacity: '0', transform: 'scale(0.1) translateX(100%)' },
        },
      },
    }
  },
  rules: [
    // 流動的に反復回数と持続時間を指定できるアニメーションルール
    [
      /^animate-(\w+)-(infinite|\d+)-(\d+ms)$/,
      ([, anim, count, duration]) => ({
        animation: `${anim} ${duration} ease-in-out ${count}`,
      }),
    ],
  ],
  // preflights: [
  //   {
  //     getCSS: ({ theme }) => `
  //       @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
  //       @keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; } }
  //       @keyframes slideIn { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
  //       @keyframes slideOut { 0% { transform: translateX(0); } 100% { transform: translateX(100%); } }
  //       @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
  //       @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
  //       @keyframes shake { 0%, 100% { transform: translateX(0); } 25%, 75% { transform: translateX(-10px); } 50% { transform: translateX(10px); } }
  //       @keyframes zoomIn { 0% { transform: scale(0); } 100% { transform: scale(1); } }
  //       @keyframes zoomOut { 0% { transform: scale(1); } 100% { transform: scale(0); } }
  //       @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  //       @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  //       @keyframes flip { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(180deg); } }
  //       @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
  //       @keyframes flash { 0%, 100%, 50% { opacity: 1; } 25%, 75% { opacity: 0; } }
  //       @keyframes rubberBand { 0% { transform: scale(1); } 30% { transform: scale(1.25, 0.75); } 40% { transform: scale(0.75, 1.25); } 50% { transform: scale(1.15, 0.85); } 65% { transform: scale(0.95, 1.05); } 75% { transform: scale(1.05, 0.95); } 100% { transform: scale(1); } }
  //       @keyframes jello { 0%, 100% { transform: scale(1); } 30% { transform: scale(1.25, 0.75); } 40% { transform: scale(0.75, 1.25); } 50% { transform: scale(1.15, 0.85); } 65% { transform: scale(0.95, 1.05); } 75% { transform: scale(1.05, 0.95); } }
  //       @keyframes swing { 20% { transform: rotate(15deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }
  //       @keyframes hinge { 0% { transform: rotate(0deg); transform-origin: top left; opacity: 1; } 20%, 60% { transform: rotate(80deg); transform-origin: top left; opacity: 1; } 40%, 80% { transform: rotate(60deg); transform-origin: top left; opacity: 1; } 100% { transform: translateY(700px); opacity: 0; } }
  //       @keyframes tada { 0%, 100% { transform: scale(1); } 10%, 20% { transform: scale(0.9) rotate(-3deg); } 30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); } 40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); } }
  //       @keyframes bounceIn { 0%, 100% { opacity: 0; transform: scale(0.3); } 50% { opacity: 1; transform: scale(1); } }
  //       @keyframes bounceOut { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0; transform: scale(0.3); } }
  //       @keyframes flipInX { 0% { transform: perspective(400px) rotateX(90deg); opacity: 0; } 100% { transform: perspective(400px) rotateX(0); opacity: 1; } }
  //       @keyframes flipOutX { 0% { transform: perspective(400px) rotateX(0); opacity: 1; } 100% { transform: perspective(400px) rotateX(90deg); opacity: 0; } }
  //       @keyframes flipInY { 0% { transform: perspective(400px) rotateY(90deg); opacity: 0; } 100% { transform: perspective(400px) rotateY(0); opacity: 1; } }
  //       @keyframes flipOutY { 0% { transform: perspective(400px) rotateY(0); opacity: 1; } 100% { transform: perspective(400px) rotateY(90deg); opacity: 0; } }
  //       @keyframes lightSpeedIn { 0% { transform: translateX(100%) skewX(-30deg); opacity: 0; } 100% { transform: translateX(0) skewX(0deg); opacity: 1; } }
  //       @keyframes lightSpeedOut { 0% { transform: translateX(0) skewX(0deg); opacity: 1; } 100% { transform: translateX(100%) skewX(-30deg); opacity: 0; } }
  //       @keyframes rollIn { 0% { opacity: 0; transform: translateX(-100%) rotate(-120deg); } 100% { opacity: 1; transform: translateX(0) rotate(0deg); } }
  //       @keyframes rollOut { 0% { opacity: 1; transform: translateX(0) rotate(0deg); } 100% { opacity: 0; transform: translateX(100%) rotate(120deg); } }
  //       @keyframes fadeInDown { 0% { opacity: 0; transform: translateY(-100%); } 100% { opacity: 1; transform: translateY(0); } }
  //       @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(100%); } 100% { opacity: 1; transform: translateY(0); } }
  //       @keyframes fadeInLeft { 0% { opacity: 0; transform: translateX(-100%); } 100% { opacity: 1; transform: translateX(0); } }
  //       @keyframes fadeInRight { 0% { opacity: 0; transform: translateX(100%); } 100% { opacity: 1; transform: translateX(0); } }
  //       @keyframes fadeOutDown { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(100%); } }
  //       @keyframes fadeOutUp { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-100%); } }
  //       @keyframes fadeOutLeft { 0% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(-100%); } }
  //       @keyframes fadeOutRight { 0% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(100%); } }
  //       @keyframes bounceInDown { 0%, 100% { opacity: 0; transform: translateY(-100%); } 50% { opacity: 1; transform: translateY(0); } }
  //       @keyframes bounceInUp { 0%, 100% { opacity: 0; transform: translateY(100%); } 50% { opacity: 1; transform: translateY(0); } }
  //       @keyframes bounceInLeft { 0%, 100% { opacity: 0; transform: translateX(-100%); } 50% { opacity: 1; transform: translateX(0); } }
  //       @keyframes bounceInRight { 0%, 100% { opacity: 0; transform: translateX(100%); } 50% { opacity: 1; transform: translateX(0); } }
  //       @keyframes bounceOutDown { 0%, 100% { opacity: 1; transform: translateY(0); } 50% { opacity: 0; transform: translateY(100%); } }
  //       @keyframes bounceOutUp { 0%, 100% { opacity: 1; transform: translateY(0); } 50% { opacity: 0; transform: translateY(-100%); } }
  //       @keyframes bounceOutLeft { 0%, 100% { opacity: 1; transform: translateX(0); } 50% { opacity: 0; transform: translateX(-100%); } }
  //       @keyframes bounceOutRight { 0%, 100% { opacity: 1; transform: translateX(0); } 50% { opacity: 0; transform: translateX(100%); } }
  //       @keyframes zoomInDown { 0% { opacity: 0; transform: scale(0.1) translateY(-100%); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
  //       @keyframes zoomInUp { 0% { opacity: 0; transform: scale(0.1) translateY(100%); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
  //       @keyframes zoomInLeft { 0% { opacity: 0; transform: scale(0.1) translateX(-100%); } 100% { opacity: 1; transform: scale(1) translateX(0); } }
  //       @keyframes zoomInRight { 0% { opacity: 0; transform: scale(0.1) translateX(100%); } 100% { opacity: 1; transform: scale(1) translateX(0); } }
  //       @keyframes zoomOutDown { 0% { opacity: 1; transform: scale(1) translateY(0); } 100% { opacity: 0; transform: scale(0.1) translateY(100%); } }
  //       @keyframes zoomOutUp { 0% { opacity: 1; transform: scale(1) translateY(0); } 100% { opacity: 0; transform: scale(0.1) translateY(-100%); } }
  //       @keyframes zoomOutLeft { 0% { opacity: 1; transform: scale(1) translateX(0); } 100% { opacity: 0; transform: scale(0.1) translateX(-100%); } }
  //       @keyframes zoomOutRight { 0% { opacity: 1; transform: scale(1) translateX(0); } 100% { opacity: 0; transform: scale(0.1) translateX(100%); } }
  //     `,
  //   },
  // ],
})

