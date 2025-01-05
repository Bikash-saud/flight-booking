
import { Flowbite } from 'flowbite-react/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    Flowbite
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F1131",
        secondary: "#FFA903",
        textClr: "#21283F",
        lightBg: "#FBF9F2"
      }
    },
  },
  plugins: [Flowbite],
}