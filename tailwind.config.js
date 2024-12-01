/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wangshu-img": "url('./src/assets/img/Wangshu_Inn.jpg')",
        "contact-bg": "url('./src/assets/img/room.jpg')",
      },
      fontFamily: {
        logo: ['"Genshin Impact DRIP FONT"'],
      },
    },
  },
  plugins: [],
};
