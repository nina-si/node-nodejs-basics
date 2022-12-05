import fsPromises from 'fs/promises';

const remove = async () => {
  try {
    await fsPromises.unlink('./files/fileToRemove.txt');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
