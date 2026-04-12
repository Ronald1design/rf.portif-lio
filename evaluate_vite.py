import subprocess
result = subprocess.run(['node', 'node_modules/vite/bin/vite.js'], capture_output=True, text=True)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
