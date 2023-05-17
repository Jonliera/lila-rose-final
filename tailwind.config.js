/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["poppins", "sans-serif"] },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F7E1AE",

          secondary: "#88ef28",

          accent: "#95f4ce",

          neutral: "#1B232C",

          "base-100": "#FFFFFF",

          info: "#F7E1AE",

          success: "#43DF99",

          warning: "#F69D28",

          error: "#F45D7E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
