/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingPage': "url('../../Images/Landing.jpg')"
      }
    },
  },
  plugins: [],
}

