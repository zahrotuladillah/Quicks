/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2f80ed',
        'primary-darkgrey': '#4f4f4f',
        'primary-grey': '#828282',
        'primary-lightgrey': '#e0e0e0',
        'indicator-orange': '#f8b76b',
        'indicator-purple': '#8785ff',
        'indicator-red': '#eb5757',
        'indicator-yellow': '#f2c94c',
        'chat-orange': '#e5a443',
        'chat-lightorange': '#fceed3',
        'chat-purple': '#9b51e0',
        'chat-lightpurple': '#eedcff',
        'chat-green': '#43b78d',
        'chat-lightgreen': '#d2f2ea',
        'stickers-slate': '#e9f3ff',
        'stickers-orange': '#fdcfa4',
        'stickers-yellow': '#f9e9c3',
        'stickers-cyan': '#afebdb',
        'stickers-green': '#cbf1c2',
        'stickers-purple': '#cfcef9',
        'stickers-pink': '#f9e0fd',
        'stickers-blue': '#9DD0ED'
      }
    },
  },
  plugins: [],
}