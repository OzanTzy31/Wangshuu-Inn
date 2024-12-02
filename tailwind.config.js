/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wangshu-img": "url('/img/Wangshu_Inn.jpg')",
        "contact-bg": "url('/img/room.jpg')",
      },
      fontFamily: {
        logo: ['"Genshin Impact DRIP FONT"'],
      },
    },
  },
  plugins: [],
};
