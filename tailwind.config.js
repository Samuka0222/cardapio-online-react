/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
      colors: {
        bg: "#fffdf7",
        text: "#4f4f4f",
        textOut: "#90908e",
        primary: "#ffbf00",
        secondary: "#fff2cc",
        black: "#212121",
        white: "#ffffff",
        red: "#e74c3c",
        green: "#2ecc71",
        separate: "#cccccc"
      },
      borderRadius: {
        "6xl": "5rem"
      },
      backgroundImage: {
        'pattern1': "url('/src/assets/img/bg-icons-1.png')",
        'pattern2': "url('/src/assets/img/bg-icons-2.png')"
      },
      animation: {
        'slideDown': 'slideDown 0.7s linear',
        'slideUp': 'slideUp 0.7s linear'
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-180%)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          }, 
          '100%': {
            transform: 'translateY(0%)'
          }
        },
        slideUp: {
          '0%': {
            transform: 'translateY(0%)',
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          }, 
          '100%': {
            transform: 'translateY(-180%)'
          }
        }
      }
    },
    boxShadow: {
      'padrao': "0px 10px 25px -3px rgba(0,0,0,0.1);"
    }
  },
  plugins: [],
}

