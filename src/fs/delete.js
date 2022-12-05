import fsPromises from 'fs/promises';

const remove = async () => {
  try {
    const deletePath = new URL('./files/fileToRemove.txt', import.meta.url);
    await fsPromises.unlink(deletePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
