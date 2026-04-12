import subprocess
import json
import traceback

try:
    p = subprocess.run(['node', 'node_modules/vite/bin/vite.js'], capture_output=True, text=True)
    with open('vite_error.json', 'w') as f:
        json.dump({'out': p.stdout, 'err': p.stderr, 'code': p.returncode}, f)
except Exception as e:
    with open('vite_error.json', 'w') as f:
        json.dump({'err': str(e), 'trace': traceback.format_exc()}, f)
