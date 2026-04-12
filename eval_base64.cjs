const { spawnSync } = require('child_process');
const fs = require('fs');
const result = spawnSync('node', ['node_modules/vite/bin/vite.js'], { encoding: 'utf-8' });
fs.writeFileSync('vite_error_decoded.txt', result.stderr || 'No stderr');
console.log('Saved to vite_error_decoded.txt');
