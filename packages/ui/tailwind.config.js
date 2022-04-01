const plugin = require("tailwindcss/plugin");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ["./components/**/*.{ts,js,tsx}", "./icons/**/*.{ts,js,tsx}"],
  theme: {
    fontFamily: {
      header: ["Inter", "sans-serif"],
      body: ["Roboto", "sans"],
    },
    colors: {
      white: withOpacityValue("--white"),
      black: withOpacityValue("--black"),
      "grey-900": withOpacityValue("--grey--900"),
      "grey-800": withOpacityValue("--grey--800"),
      "grey-700": withOpacityValue("--grey--700"),
      "grey-600": withOpacityValue("--grey--600"),
      "grey-500": withOpacityValue("--grey--500"),
      "grey-400": withOpacityValue("--grey--400"),
      "grey-300": withOpacityValue("--grey--300"),
      "grey-200": withOpacityValue("--grey--200"),
      "grey-100": withOpacityValue("--grey--100"),
      "grey-050": withOpacityValue("--grey--050"),
      "mint-500": withOpacityValue("--mint--500"),
      "teal-500": withOpacityValue("--teal--500"),
      "nyanza-500": withOpacityValue("--nyanza--500"),
      "voilet-900": withOpacityValue("--voilet--900"),
      "voilet-800": withOpacityValue("--voilet--800"),
      "voilet-700": withOpacityValue("--voilet--700"),
      "voilet-600": withOpacityValue("--voilet--600"),
      "voilet-500": withOpacityValue("--voilet--500"),
      "voilet-400": withOpacityValue("--voilet--400"),
      "voilet-300": withOpacityValue("--voilet--300"),
      "voilet-200": withOpacityValue("--voilet--200"),
      "voilet-100": withOpacityValue("--voilet--100"),
      "voilet-050": withOpacityValue("--voilet--050"),
      "purple-navy-900": withOpacityValue("--purple-navy--900"),
      "purple-navy-800": withOpacityValue("--purple-navy--800"),
      "purple-navy-700": withOpacityValue("--purple-navy--700"),
      "purple-navy-600": withOpacityValue("--purple-navy--600"),
      "purple-navy-500": withOpacityValue("--purple-navy--500"),
      "purple-navy-400": withOpacityValue("--purple-navy--400"),
      "purple-navy-300": withOpacityValue("--purple-navy--300"),
      "purple-navy-200": withOpacityValue("--purple-navy--200"),
      "purple-navy-100": withOpacityValue("--purple-navy--100"),
      "purple-navy-050": withOpacityValue("--purple-navy--050"),
      "dark-purple-800": withOpacityValue("--dark-purple--800"),
      "dark-purple-700": withOpacityValue("--dark-purple--700"),
      "dark-purple-600": withOpacityValue("--dark-purple--600"),
      "dark-purple-500": withOpacityValue("--dark-purple--500"),
      "dark-purple-400": withOpacityValue("--dark-purple--400"),
      "dark-purple-300": withOpacityValue("--dark-purple--300"),
      "dark-purple-200": withOpacityValue("--dark-purple--200"),
      "dark-purple-100": withOpacityValue("--dark-purple--100"),
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".body-1": {
          fontFamily: "Roboto",
          fontSize: "0.875rem",
          lineHeight: 1.6,
        },
        ".body-2": {
          fontFamily: "Roboto",
          fontSize: "1.125rem",
          lineHeight: "10rem",
        },
        ".body-3": {
          fontFamily: "Roboto",
          fontSize: "1.438rem",
          lineHeight: 1.4,
        },
        ".bg-purple-gradient": {
          background: "linear-gradient(to bottom, #a93bff 0%, #8834ff 100%)",
        },
      });
    }),
  ],
};
