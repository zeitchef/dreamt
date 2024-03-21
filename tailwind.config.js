/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        winning: "url('src/assets/img/winning.webp')"
      }
    }
  },
  plugins: []
}
