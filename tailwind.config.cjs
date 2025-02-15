/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 80s linear infinite',
        'infinite-scroll-inverted': 'infinite-scroll-inverted 80s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
        'infinite-scroll-inverted': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },

        }
      },
    }
  },
  plugins: [],
}
