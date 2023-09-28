/** @type {import('tailwindcss').Config} */
import twPlugin from "ui/plugin";
// import { mergedStyles } from "ui/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [twPlugin],
};
