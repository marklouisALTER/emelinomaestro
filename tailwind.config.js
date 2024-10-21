/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B94E9',  
        secondary: '#D9D9D9',
        primaryDark: '#3F6BBF',
        secondaryDark: '#A6A6A6',
        white: '#FFFFFF',
        whiteDark: '#F0F0F0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
        monts: ['Montserrat', 'sans-serif'],
      },
      

    },
  },
  plugins: [],
}

