/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'pink-custom': '#A04267',
        'yellow-custom': '#FFD69A',
      })
    },
  },
  plugins: [],
}
