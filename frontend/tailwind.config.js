/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: false,
    extend: {
      colors: {
        text: "#31BB7C",
        primary: '#31BB7C',
        secondary: '#259562',
        danger: '#E10000',
        success: '#104E31',
        warning: '#F4C129',
        info: '#67B6FF',
        body: "#EFF3F8",
        light: '#FFFFFF',
        dark: '#000000',
      },
    },
  },
  plugins: [],
}

