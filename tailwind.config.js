/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        "custom-background-accent": "#a3b8ef",
        "custom-background-primary": "#13171b",
        "custom-background-secondary": "#171b20",
        "custom-background-secondary-alt": "#21262e",
        "custom-foreground-primary": "#a855f7",
      },
    },
  },
  plugins: [],
};
