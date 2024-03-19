/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '800px',
      },
      spacing: {
        100: '25rem',
        120: '30rem',
        160: '40rem',
        200: '50rem',
      }
    },
  },
  plugins: [],
};
