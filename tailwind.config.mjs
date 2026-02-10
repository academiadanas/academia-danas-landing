/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e74a82',
          light: '#f07da6',
          dark: '#d22c64',
          50: 'rgba(231, 74, 130, 0.08)',
        },
        gray: {
          50: '#fcfbff',
          100: '#f3f1f6',
          200: '#e5e0eb',
          300: '#d1c9d9',
          400: '#9e94aa',
          500: '#756a85',
          600: '#5c5269',
          700: '#453d4f',
          800: '#2d2636',
          900: '#120925',
        },
        whatsapp: '#25d366',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(18, 9, 37, 0.06)',
        glow: '0 4px 20px rgba(231, 74, 130, 0.35)',
      },
    },
  },
  plugins: [],
};
