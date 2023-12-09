/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': {'max': '1223px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1234px', 'max': '1700px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      '2xl': {'min': '1701px'},
    },
  },
  plugins: [],
}

