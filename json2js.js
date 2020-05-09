const { exec } = require('child_process')
const fs = require('fs')

var text = fs.readFileSync('./docs/typedoc/docs.json', {encoding: 'utf8'})
text = `var data = ${text};`;
fs.writeFileSync('./docs/typedoc/docs.js', text, {encoding: 'utf8'})
