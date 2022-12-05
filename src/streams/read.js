import fs from 'fs';
import { stdout } from 'process';

const read = async () => {
  const filePath = new URL('./files/fileToRead.txt', import.meta.url);

  const stream = fs.createReadStream(filePath, 'utf8');

  stream.pipe(stdout);
};

await read();
