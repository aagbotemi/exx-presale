/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#174AFF',
        deep_blue: '#1D2A65',
        light_blue: '#D3F4F9',
        grey: '#D9D9D9'
      }
    },
    fontFamily: {
      space_grot: ['Space Grotesk'],
      dm_sans: ['DM Sans'],
    }
  },
  plugins: [],
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    },
  ],
}
