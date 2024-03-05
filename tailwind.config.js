/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  important: true,
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
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation:{
        slidein:"slidein 1s ease 500ms",
        slideinText:"slideinText 1s  ease-out 700ms",
        wiggle: 'wiggle 0.2s 700  ease-in-out  ',


      }
    },
  },
  plugins: [],
}
