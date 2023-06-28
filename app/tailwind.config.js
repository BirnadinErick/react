/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFE066',
        'green': '#92AE83',
        'orange':'#F9A061',
        'red':'#F25F5C',
        'torquise':'#70C1B3',
        'gray':'#50514F'
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
        serif: ['Prata', 'serif'],
        mono: ['Space Mono', 'monospace']
      }
    }
  },
  plugins: [],
}

