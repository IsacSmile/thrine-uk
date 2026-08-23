/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F5F3EE',
        editorial: {
          DEFAULT: '#171714',
          muted: '#6F6D66',
        },
        dark: {
          DEFAULT: '#191A17',
          foreground: '#F5F3EE',
          border: '#34352F',
        },
        terracotta: {
          DEFAULT: '#B84A32',
          hover: '#9E3E29',
        },
        studio: {
          border: '#D9D6CE',
          surface: '#ECE9E1',
        },
        // Backwards compatibility mappings
        graphite: {
          950: '#F5F3EE',
          900: '#ECE9E1',
          850: '#ECE9E1',
          800: '#D9D6CE',
          700: '#6F6D66',
        },
        brand: {
          50: '#F5F3EE',
          100: '#ECE9E1',
          400: '#B84A32',
          500: '#B84A32',
          600: '#191A17',
          700: '#9E3E29',
        }
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '4px',
        lg: '8px',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
