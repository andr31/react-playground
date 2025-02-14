/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        madelyn: ['Madelyn', 'sans-serif'],
        montez: ['Montez', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            fontSize: '2.25rem', // text-4xl
            fontWeight: '700', // font-bold
          },
          h2: {
            fontSize: '1.875rem', // text-3xl
            fontWeight: '600', // font-semibold
          },
          h3: {
            fontSize: '1.5rem', // text-2xl
            fontWeight: '500', // font-medium
          },
          // Add more styles for h4, h5, h6 if needed
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
