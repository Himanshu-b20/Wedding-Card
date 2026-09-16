/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFDF9',
          100: '#FFF9EF',
          200: '#F8F0E3',
          300: '#EFE5D3',
          400: '#E2D5BF',
        },
        maroon: {
          700: '#8A2B3D',
          800: '#6E1F2E',
          900: '#42131E',
          950: '#2A0B13',
        },
        gold: {
          300: '#D8C395',
          400: '#C5A86A',
          500: '#B5965A',
          600: '#9A7B3E',
          700: '#7E632F',
        },
        royalbrown: {
          800: '#3A2724',
          900: '#291C1A',
          950: '#1A110F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        hindi: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      boxShadow: {
        'gold-subtle': '0 4px 20px -2px rgba(181, 150, 90, 0.18)',
        'maroon-rich': '0 10px 30px -5px rgba(66, 19, 30, 0.35)',
      },
    },
  },
  plugins: [],
}
