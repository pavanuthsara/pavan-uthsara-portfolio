import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu:['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [daisyui],
  daisyui : {
    themes: ["light"],
  }
}

