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
          secondary: "#1c99fe",
          "info": "#7644ff",
          accent: "#000000",
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