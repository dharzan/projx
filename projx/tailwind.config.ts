import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        twitterWhite: '#e7e9ea',
        twitterBlue: '#308CD8',
        twitterBorder:'#2f3336',
        twitterLightGrey: '#71767b',
        twitterDarkGray: '#17181C',
      },

      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },

      width:{
        '10': '10%',
        '5': '5%',
        '2': '2%'
      }

    },
  },
  plugins: [],
};
export default config;
