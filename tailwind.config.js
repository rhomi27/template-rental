/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'abupink':'#989898',
        'cklt' : '#644D4D',
        'cklt2' : '#B99470',
      }
    },
  },
  plugins: [require('flowbite/plugin')({
    datatables: true,
})],
}

