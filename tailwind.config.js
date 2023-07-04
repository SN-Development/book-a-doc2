/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-slide': "url('/images/logo.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  
  plugins: [],
}
