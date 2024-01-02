/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightGrey': 'hsl(270, 3%, 87%)',
        'deepViolet': 'hsl(278, 68%, 11%)',
        'purblishGrey': 'hsla(278, 6%, 55%, 1)'
      }
    },
    screens: {
      'mobile': '375px',
      'laptop': '1024px',
      'desktop': '1320px'
    }
  },
  plugins: [],
}

