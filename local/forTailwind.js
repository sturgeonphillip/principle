@import url('https://fonts.cdnfonts.com/css/saniretro');

@font-face {
  font-family: 'Saniretro';
  font-style: normal;
  font-weight: normal;
  src: local('Saniretro'),
    url('../public/assets/fonts/saniretro/Saniretro.ttf') format('truetype');
}

@font-face {
  font-family: 'breamcatcher';
  font-style: normal;
  font-weight: normal;
  src: url('../public/assets/fonts/bream-catcher/breamcatcher.ttf')
    format('truetype');
}

@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;

@layer components {
  .white-square {
    @apply object-contain font-serif text-black border-2 bg-amber-100 aspect-square border-stone-600;
  }
  .black-square {
    @apply object-contain font-serif text-white bg-black border-2 aspect-square border-stone-600;
  }
}
/***
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

*/

/* https://tailwindcss.com/docs/customizing-colors */


module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['breamcatcher'],
        'serif': 'Saniretro'
      },
    },
  },
  plugins: [],
};


// ': 'Saniretro','sans-serif': 'breamcatcher'
// https://github.com/jwasham/coding-interview-university
