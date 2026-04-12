const { execSync } = require('child_process');
try {
  const result = execSync('node node_modules/vite/bin/vite.js', { encoding: 'utf-8', stdio: 'pipe' });
  console.log('STDOUT:', result);
} catch (e) {
  console.log('--- STDERR START ---');
  console.log(e.stderr);
  console.log('--- STDERR END ---');
}
