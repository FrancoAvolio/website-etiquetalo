// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       fontFamily: {
//         sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
//       },
//     },
//   },
//   plugins: [],
// };

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'azul-card': '#16284E',
        'text-blue': '#16284E',
        'second-blue': '#24485E',
      },
    },
    screens : {
      '2sm' : '320px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768x',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
});
