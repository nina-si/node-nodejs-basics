import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
  const archivePath = new URL('./files/archive.gz', import.meta.url);
  const filePath = new URL('./files/fileToCompress.txt', import.meta.url);
  const read = fs.createReadStream(archivePath);
  const write = fs.createWriteStream(filePath);
  const gzip = zlib.createGunzip();
  read.pipe(gzip).pipe(write);
};

await decompress();
