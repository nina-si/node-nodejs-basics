import fs from 'fs';
import readline from 'readline';

const write = async () => {
  const filePath = new URL('./files/fileToWrite.txt', import.meta.url);

  const stream = fs.createWriteStream(filePath);

  const rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
  });

  rl.on('line', (data) => {
    stream.write(`${data}\n`);
  });

  rl.on('close', () => {
    stream.end();
  });
};

await write();
