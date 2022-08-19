const pluginSortImports = require('@trivago/prettier-plugin-sort-imports');
const pluginTailwindcss = require('prettier-plugin-tailwindcss');

/** @type {import("prettier").Parser}  */
const myParser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse,
};

/** @type {import("prettier").Plugin}  */
const myPlugin = {
  parsers: {
    typescript: myParser,
  },
};

module.exports = {
  plugins: [myPlugin],
  // my settings
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  // singleQuote: true,
  semi: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
