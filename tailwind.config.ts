import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        react: "#61DBFB",
        typescript: "#3178c6",
        kotlin: "#B125EA",
        swift: "#F05138",
        spring: "#6DB33F",
        dotnet: "#512bd4",
      },
    },
  },
  plugins: [],
};
export default config;
