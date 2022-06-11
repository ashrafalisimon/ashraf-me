module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        ashraftheme: {
          primary: "#fd4766",
          secondary: "#337dff",
          accent: "#2A2A2A",
          neutral: "#202020",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

// #037FFF #0F1417