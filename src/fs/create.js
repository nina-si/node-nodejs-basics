import fsPromises from 'fs/promises';

const isFileExists = async (path) => {
  try {
    await fsPromises.access(path);
    return true;
  } catch (err) {
    return false;
  }
};

const create = async () => {
  try {
    const path = './files/fresh.txt';
    const fileExists = await isFileExists(path);
    if (!fileExists) {
      const data = 'I am fresh and young';
      await fsPromises.writeFile(path, data);
    } else throw new Error();
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
