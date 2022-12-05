import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
  const filePath = new URL('./files/fileToCompress.txt', import.meta.url);
  const archivePath = new URL('./files/archive.gz', import.meta.url);
  const read = fs.createReadStream(filePath);
  const write = fs.createWriteStream(archivePath);
  const archive = zlib.createGzip();

  read.pipe(archive).pipe(write);
};

await compress();
