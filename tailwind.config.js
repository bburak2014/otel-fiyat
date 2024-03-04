/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      keyframes:{
        slidein:{
          from:{
            opacity:"0",
            transform:"translateY(-10px)"
          },
          to:{
            opacity:"1",
            transform:"translateY(0)"
          },
        },
        slideinText:{
          from:{
            opacity:"0",
            transform:"translateX(-10vw)"
          },
          to:{
            opacity:"1",
            transform:"translateX(0)"
          },
        }
      },
      animation:{
        slidein:"slidein 1s ease 500ms",
        slideinText:"slideinText 1s  ease-out 700ms"

      }
    },
  },
  plugins: [],
}
