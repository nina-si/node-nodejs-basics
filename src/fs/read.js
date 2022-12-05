import fsPromises from 'fs/promises';

const read = async () => {
  try {
    const readPath = new URL('./files/fileToRead.txt', import.meta.url);
    const data = await fsPromises.readFile(readPath, {
      encoding: 'utf8',
    });
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
