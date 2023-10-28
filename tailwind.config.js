/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: '#B5D411',
        textColor: '#333333',
        altTextColor: '#626262',
        brandBlack: '#222222',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/bg-big.webp')",
      },
    },
  },
  plugins: [],
}

