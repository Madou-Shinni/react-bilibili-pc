/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': {'max': '1403px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1404px', 'max': '1979px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      '2xl': {'min': '1980px'},
    },
  },
  plugins: [],
}

