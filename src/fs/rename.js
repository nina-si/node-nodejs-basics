import fsPromises from 'fs/promises';

const rename = async () => {
  try {
    const baseUrl = import.meta.url;

    const oldPath = new URL('./files/wrongFilename.txt', baseUrl);
    const newPath = new URL('./files/properFilename.md', baseUrl);

    await fsPromises.rename(oldPath, newPath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
