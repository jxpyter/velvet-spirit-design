/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          dark: '#1a1a1a', // Charcoal
          light: '#f5f5f5', // Off-white
          gold: '#bf9b30', // Muted Gold
          accent: '#ffffff',
          glass: 'rgba(255, 255, 255, 0.1)',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
          signature: ['Allura', 'cursive'],
          regal: ['Cinzel', 'serif'],
        }
      },
    },
  },
  plugins: [],
}
