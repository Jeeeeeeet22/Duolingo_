import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "oklch(0.929 0.013 255.508)",
        ring: "oklch(0.704 0.04 256.788)",
        background: "oklch(1 0 0)",
        foreground: "oklch(0.129 0.042 264.695)",
        // add all your OKLCH colors if needed
      },
    },
  },
  plugins: [],
};

export default config;