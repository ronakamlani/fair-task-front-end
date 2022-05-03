module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "tracking-tight" : "0.02em",
      colors:{
        'dark1': '#28282A',
        'gray1': '#F5F4F2',
        'dark-gray1':'#8C8B89',
        'dark-gray2':'#C9C7C5',
      },
    },
  },
  plugins: [],
}
