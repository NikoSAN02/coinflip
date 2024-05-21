/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '70%': { transform: 'rotateY(900deg)' }, // 2.5 full rotations
          '100%': { transform: 'rotateY(1800deg)' }, // 5 full rotations
        },
      },
      animation: {
        flip: 'flip 2s ease-in-out', // Spin for 2 seconds
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
