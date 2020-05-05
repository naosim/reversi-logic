const { exec } = require('child_process')
const fs = require('fs')

var text = fs.readFileSync('./docs/docs.json', {encoding: 'utf8'})
text = `var data = ${text};`;
fs.writeFileSync('./docs/docs.js', text, {encoding: 'utf8'})
