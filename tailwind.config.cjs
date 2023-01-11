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
        faint_blue: "#E8F2FF",
        inverse_blue: "#0077FE",
        grey: '#D9D9D9',
        dark: '#111315',
        green: '#00D9AC',
        yellow: "#FFCB67",
      },
      boxShadow: {
        'active': '0px 0px 1px 6px rgba(83, 240, 224, 0.418)',
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
