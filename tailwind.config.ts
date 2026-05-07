import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'nextgen-dark': '#050505',
        'nextgen-panel': '#111111',
        'nextgen-accent': '#3b82f6',
        'nextgen-purple': '#a855f7',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } }
      }
    },
  },
  plugins: [],
};
export default config;