/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f9f4',
          100: '#e8f0e3',
          200: '#d1e0c7',
          300: '#afc89f',
          400: '#88a870',
          500: '#6b8e4e',
          600: '#557038',
          700: '#445930',
          800: '#384829',
          900: '#2f3d24',
        },
        warm: {
          50: '#fdf8f3',
          100: '#faeee2',
          200: '#f4dbc4',
          300: '#ecc19d',
          400: '#e3a274',
          500: '#d98654',
          600: '#c86d3f',
          700: '#a65536',
          800: '#864531',
          900: '#6e3a29',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}