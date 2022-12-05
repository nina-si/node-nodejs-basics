import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';

import './files/c.js';

const random = Math.random();

const filePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(filePath);

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(
    await fsPromises.readFile(new URL('./files/a.json', import.meta.url))
  );
} else {
  unknownObject = JSON.parse(
    await fsPromises.readFile(new URL('./files/b.json', import.meta.url))
  );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filePath}`);
console.log(`Path to current directory is ${dirPath}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject,
  myServer,
};
