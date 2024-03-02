/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
