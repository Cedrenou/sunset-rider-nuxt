/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        100: '#FFB704',
        200: '#FF8F11',
        300: '#FF8F11',
        400: '#FF5026',
        500: '#FD322D',
      },
      secondary: {
        100: '#AACEC0',
        200: '#95BBA2',
        300: '#7FA48A',
        400: '#6A8D7E',
        500: '#548176',
      },
    },
    extend: {},
  },
  plugins: [],
}
