module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
      },
    },
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
