/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      'pack-train': "url('../src/assets/bloblHeadet.svg')",
      'wave': "url('../src/assets/wave-haikei.svg')",
      'wave2': "url('../src/assets/wave-haikei.svg')",
    },
    extend: {
      animation: {
        'spin-slow': 'wave 3s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' },
        },},
    },
  },
  plugins: [],
}