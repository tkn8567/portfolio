/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        jap: ["Shippori+Mincho"],
        jost: ["Jost"],
        lust: ["Abril Fatface", 'cursive'],
      },
    },
  },
  plugins: [],
}
