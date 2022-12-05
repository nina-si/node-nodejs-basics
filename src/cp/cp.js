import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const scriptPath = new URL('./files/script.js', import.meta.url);
  const child = spawn('node', [scriptPath.href.slice(8), ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
