export default {
  plugins: {
    '@tailwindcss/postcss': {}, // ← Tailwind v4 対応
    autoprefixer: {},
    '@unocss/postcss': {},      // ← UnoCSS を併用している場合
  },
}
