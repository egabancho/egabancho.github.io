/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {},
  },
  plugins: [    
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],  
}

