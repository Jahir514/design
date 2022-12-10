module.exports = {
  content: ['./src/**/*.{html,js}', './*.{html,js}'],
  theme: {
    screens: {
      xs: '374px',
      // => @media (min-width: 640px) { ... }
      sm: '576px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1140px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      poppins: ['Poppins'],
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
        secondary: '#FF4A52',
        primary: '#00bcb3',
        'menu-color': '#040E27',
      },
    },
  },
  plugins: [],
};
