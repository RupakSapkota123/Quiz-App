module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': '420px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      sans: ['SF Pro Display', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '1xs': '20px',
        '1xl': '35px'
      },
      colors: {
        'nav': '#23837F',
        'indigo-950': '#1b1925',
        'indigo-1000': '#100f17',
        'indigo-1100': '#08070f'
      },
      height: {
        '50px': '50px',
        '20rem': '20rem',
        '25rem': '25rem',
      },
      maxWidth: {
        '16rem': '16rem'
      },
      minWidth: {
        '15rem': '15rem'
      },
      maxHeight: {
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '85%': '85%',
      },
      minHeight: {
        '10rem': '10rem',
        '18rem': '18rem',
        '24rem': '24rem',
        '80%': '80%',
      },
      width: {
        '20rem': '20rem',
        '30rem': '30rem',
        '40rem': '40rem'
      },
      padding: {
        '3%': '3%',
        '60px': '60px',
        '20%': '20%',
        '10%': '10%',
      },
      zIndex: {
        '9999': '9999'
      },
      gap: {
        '5px': '5px',
      }
    },
    default: {
      button: {
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: 0.4,
        }
      }
    }
  },
  // variants: {
  //   cursor: ['hover', 'focus'],
  //   backgroundColor: ['hover', 'focus', 'important', 'responsive', 'dark'],
  //   backgroundSize: ['important', 'responsive'],
  //   backgroundRepeat: ['important', 'responsive'],
  //   backgroundPosition: ['important', 'responsive'],
  //   margin: ['first', 'responsive'],
  //   display: ['responsive'],
  //   padding: ['important', 'responsive'],
  //   borderRadius: ['important', 'responsive'],
  //   textColor: ['important', 'group-hover', 'hover', 'dark'],
  //   borderColor: ['important', 'focus', 'hover', 'dark'],
  //   outlineOffset: ['hover'],
  //   boxShadow: ['responsive', 'dark'],
  //   border: ['hover', 'responsive'],
  //   extend: {
  //     cursor: ['disabled'],
  //     opacity: ['disabled', 'readonly'],
  //   }
  // },

}
