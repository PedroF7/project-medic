/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        linear: "linear-gradient(102deg, #A7E2FF 0%, #0095DE 87.74%)",
        color_bg: "linear-gradient(142deg, #F2FAFF 0%, #FFF 58.83%);",
        text_blue_linear:
          "linear-gradient(101deg, #0179B4 20.59%, #88D8FF 86.44%);",
        button_top_linear:
          "linear-gradient(102deg, #A7E2FF 0%, #0095DE 87.74%);",
        sections_masters_of_medicine:
          "radial-gradient(161.39% 113.45% at 40.95% -10.45%, #35BDFF 38.13%, #008CD0 100%);",
      },
      boxShadow: {
        button: "-8px 8px 28px 0px rgba(0, 0, 0, 0.06);",
      },
      fontFamily: {
        "body-full": "Manrope, sans-serif;",
      },
    },
  },
  plugins: [],
};
