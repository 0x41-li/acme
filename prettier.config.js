const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false
};
