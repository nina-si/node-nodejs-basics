import fsPromises from 'fs/promises';

const list = async () => {
  try {
    const files = await fsPromises.readdir('./files');
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
