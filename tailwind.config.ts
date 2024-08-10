import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
       
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
      },
      colors:{
        'jade': {
        '50': '#effef7',
        '100': '#dafeef',
        '200': '#b8fadd',
        '300': '#81f4c3',
        '400': '#43e5a0',
        '500': '#1acd81',
        '600': '#0fa968',
        '700': '#108554',
        '800': '#126945',
        '900': '#11563a',
        '950': '#03301f',
    },

      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config