import plugin from "tailwindcss/plugin";
import * as componentStyles from "./styles";
import { mergeObjects } from "./helpers";

export const mergedStyles = mergeObjects(componentStyles);

const twPlugin = {
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addComponents(mergedStyles);
    }),
  ],
};

export default twPlugin;
