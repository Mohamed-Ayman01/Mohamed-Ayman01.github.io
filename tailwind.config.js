export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Instrument Serif", "serif"],
        body: ["Barlow", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "9999px",
      },
      colors: {
        accent: "#ff7c52",
      },
    },
  },
  plugins: [],
};
