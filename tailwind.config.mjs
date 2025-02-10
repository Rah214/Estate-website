/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#8B5CF6",
        },
        gray: {
          500: "#6B7280",
          300: "#D1D5DB",
        },
      },
      fontFamily: {
      sans:'Plus Jakarta Sans'
      },
      
    },
  },
  plugins: [],
};
