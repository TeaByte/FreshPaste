import { type Config } from "tailwindcss";

export default <Config> {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
