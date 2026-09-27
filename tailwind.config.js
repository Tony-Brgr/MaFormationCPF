/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        nova: {
          black: '#121212',
          cream: '#F7F5F0',
          slate: '#2A2A2A',
          sage: '#8A9A86',
          muted: '#8E8E93',
          border: '#E2DFD8'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif']
      }
    }
  },
  plugins: [],
}
