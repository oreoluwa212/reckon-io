/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D7D7D7",
        secondary: "#003566",
        brandColor: "#11253E",
        brandGold: "#E9C268 ",
      },
      backgroundImage: {
        "login-bg-img": "url('@/assets/Image/Onboardingpage.jpg')",
        logo: "url('@/assets/Image/Group 59.svg')",
      },
      fontFamily: {
        HellixRegular: ["HellixRegular", "serif"],
        HellixSemiBold: ["HellixSemiBold", "serif"],
        HellixBold: ["HellixBold", "serif"],
        HellixLight: ["HellixLight", "serif"],
        HellixThin: ["HellixThin", "serif"],
        HellixExtraBoldItalic: ["HellixExtraBoldItalic", "serif"],
        HellixMedium: ["HellixMedium", "serif"],
      },
      screens: {
        xs: "340px",
        mds: "600px",
      },
    },
  },
  plugins: [],
};
