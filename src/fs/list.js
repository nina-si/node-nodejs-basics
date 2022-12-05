import fsPromises from 'fs/promises';

const list = async () => {
  try {
    const dirPath = new URL('./files', import.meta.url);
    const files = await fsPromises.readdir(dirPath);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
