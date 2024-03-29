import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
    "routes/**/*.{ts,tsx}",
    "islands/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ["sunset"],
  },
} satisfies Config;
