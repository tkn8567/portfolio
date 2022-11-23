/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        def: ["Shippori+Mincho"],
        jost: ["Jost"],
        dance: ["Dancing Script", 'cursive'],
      },
    },
  },
  plugins: [],
}
