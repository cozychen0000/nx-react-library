/** @type {import('tailwindcss').Config} */
import twPlugin from "nx-react-library-ui/plugin/base";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [twPlugin],
};
