/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
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
    extend: {
      colors: {
        'sunset-green': '#59857A',
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [],
}
