/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'pack-train': "url('../src/assets/bloblHeadet.svg')",
      'wave': "url('../src/assets/wave-haikei.svg')",
      'wave2': "url('../src/assets/wave-haikei.svg')",
    },
    extend: {},
  },
  plugins: [],
}