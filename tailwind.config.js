/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: { "sh-header": "0px 5px 30px 0px rgba(0, 0, 0, 0.15)" },
      backgroundImage: {
        "gr-home":
          "linear-gradient(180deg, rgba(88, 194, 177, 0.15) 3.44%, rgba(197, 197, 197, 0) 97.88%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  container: {
    center: true,
  },
};
