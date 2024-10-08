/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': 'var(--main-color)',
      'color-text': 'var(--text-color',
      'opaque-text': 'var(--opaque-text)',
      'white': '#F7F7F7',
      'secondary': '#6C63FF',
      'highlight': '#534CC2',
      'red': '#E50000',
      'gray-300': '#C3C1E5',
      'gray-100': '#e0d4ff',
      'background-dark-3': 'rgb(37, 37, 37, 0.3)',
      'background-dark-7': 'rgb(37, 37, 37, 0.7)',
    },
    fontFamily:{
      'arial': 'Arial, sans-serif',
      'inter': '"Inter", system-ui',
      'kanit': '"Kanit", sans-serif'
    },
    extend: {
      boxShadow: {
        '2': '0 0 1px 1px var(--secondary-color)',
      },
      spacing:{
        '500': '31.25rem'
      }

    }
  },
  plugins: [],
}

