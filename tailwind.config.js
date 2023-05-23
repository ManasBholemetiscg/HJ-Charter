module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/images/banner.jpg')",
      },
    },
  },
  // ...
};
