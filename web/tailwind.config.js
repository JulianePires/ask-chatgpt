/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: colors.slate[950],
        'dark-gray': colors.gray[900],
        'medium-gray': colors.gray[400],
        'light-gray': colors.gray[300],
        'lighter-gray': colors.gray[100],
        primary: colors.indigo[700],
        secondary: colors.pink[600],
        blue: colors.blue[600],
        orange: colors.orange[600],
        error: colors.red[600],
        success: colors.lime[500],
        alert: colors.amber[500],
        info: colors.blue[700],
      },
    },
  },
  plugins: [],
}
