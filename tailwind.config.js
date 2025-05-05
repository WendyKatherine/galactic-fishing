/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: "#0e0e10",
        card: "#18181a",
        accent: "#1efa89",
        marketcard: "#18181b",
        border: "#27272a",
        button: "#01d265",
        buttonhover: "#067e41"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
