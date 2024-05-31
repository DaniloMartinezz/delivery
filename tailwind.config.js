module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['"Roboto"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
// Fundos Escuros
'bgdark': '#121212',
'bgdark-100': '#1C1C1C',
'bgdark-200': '#262626',
'bgdark-300': '#303030',
'bgdark-400': '#3A3A3A',
'bgdark-500': '#444444',
'bgdark-600': '#4E4E4E',
'bgdark-700': '#585858',

// Textos Brancos
'textwhite': '#FFFFFF',
'textwhite-100': '#FAFAFA',
'textwhite-200': '#F5F5F5',
'textwhite-300': '#EAEAEA',
'textwhite-400': '#E0E0E0',
'textwhite-500': '#D6D6D6',
'textwhite-600': '#CCCCCC',
'textwhite-700': '#C2C2C2',

// Textos Cinzas
'textgray': '#696969',
'textgray-100': '#757575',
'textgray-200': '#808080',
'textgray-300': '#8C8C8C',
'textgray-400': '#979797',
'textgray-500': '#A3A3A3',
'textgray-600': '#AEAEAE',
'textgray-700': '#BABABA',

// Fundos de Cards Cinzas Escuros
'cardgray': '#333333',
'cardgray-100': '#383838',
'cardgray-200': '#3D3D3D',
'cardgray-300': '#424242',
'cardgray-400': '#474747',
'cardgray-500': '#4C4C4C',
'cardgray-600': '#515151',
'cardgray-700': '#565656',

        // Tons de Violeta
        'violet': {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
          '800': '#5b21b6',
          '900': '#4c1d95',
          '950': '#2e1065',
        },
      },
    },
  },
  plugins: [],
};
