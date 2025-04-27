/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#E8F1FF',
          DEFAULT: '#0649E7',
          dark: '#022183',
        },
        neutral: {
          white: '#FEFEFE',
          black: '#101010',
        },
      },
      borderRadius: {
        '2xl': '20px',
      },
      maxWidth: {
        container: '1500px',
      },
      fontSize: {
        h1: '80px',
        h2: '40px',
        h3: '32px',
        h4: '24px',
        p1: '18px',
        p2: '16px',
      },
      lineHeight: {
        heading: '1.2',
        body: '1.5',
      },
      boxShadow: {
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};