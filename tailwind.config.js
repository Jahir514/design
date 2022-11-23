/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './*.{html,js}'],
  theme: {
    fontFamily: {
      poppins: ['poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'light-green': '#7ed56f',
        green: '#55c57a',
        'dark-green': '#28b485',
        grey: '#777777',
        'dark-grey': '#333333',
        'light-grey': '#f7f7f7',
        'light-orange': '#ffb900',
        'dark-orange': '#ff7730',
        'light-blue': '#2998ff',
        'dark-blue': '#5643fa',
        secondary: '#212529',
        'btn-color': '#00bcb3',
      },
    },
  },
  plugins: [],
};
