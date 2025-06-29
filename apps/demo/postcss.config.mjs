const config = {
  // plugins: ["],
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    "@unocss/postcss": {
      content: ['./app/**/*.{html,js,ts,jsx,tsx}'],
    },
  },
};

export default config;
