import fsPromises from 'fs/promises';

const read = async () => {
  try {
    const data = await fsPromises.readFile('./files/fileToRead.txt', {
      encoding: 'utf8',
    });
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
