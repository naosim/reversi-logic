module.exports = {
  out: './docs/typedoc',
  name: 'reversi',
  readme: 'readme.md',
  target: 'ES6',
  includes: './src',
  exclude: ['./node_modules/typescript/**', './node_modules/@babel/**', './node_modules/@types/**'],
  mode: 'file',
  //excludeExternals: true,
  //excludeNotExported: true,
  excludePrivate: true,
  includeDeclarations: true,
  theme: 'minimal',
  json: './docs/typedoc/docs.json'
};