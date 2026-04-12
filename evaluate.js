const { execSync } = require('child_process');
try {
  const result = execSync('node node_modules/vite/bin/vite.js', { encoding: 'utf-8', stdio: 'pipe' });
  console.log('STDOUT:', result);
} catch (e) {
  console.log('ERR STDOUT:', e.stdout);
  console.log('ERR STDERR:', e.stderr);
  console.log('ERR MESSAGE:', e.message);
}
