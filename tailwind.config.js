/** @type {import('tailwindcss').Config} */

const desiredShades = {
  '50': 'lightest',
  '200': 'lighter',
  '300': 'light',
  '500': 'DEFAULT',
  '600': 'dark',
  '700': 'darker',
  '900': 'darkest'
};

export const semanticNames = {
green: 'brand',
yellow: 'links',
neutral: 'neutral',
slate: 'slate',
gray: 'gray',
red: 'error',
amber: 'warning',
emerald: 'success',
blue: 'info',
}

const tokenize = (color) => Object.fromEntries(
  Object.entries(color)
    .filter(([shade]) => Object.keys(desiredShades).includes(shade))
    .map(([shade, value]) => [desiredShades[shade], value])
);


const colors =  ({ colors }) => ({
  error: tokenize(colors.red),
  warning: tokenize(colors.yellow),
  success: tokenize(colors.green),
  info: tokenize(colors.blue),
  gray: tokenize(colors.gray),
  slate: tokenize(colors.slate),
  neutral: tokenize(colors.neutral)
})

export default {
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
      colors: ({ colors }) => ({
        brand: {
          DEFAULT: colors.emerald
        }
      }),
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
    },
  },
  plugins: [import("tailwindcss-animate")],
}