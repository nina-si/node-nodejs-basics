import fsPromises from 'fs/promises';
import { isFileExist } from '../utils';

const create = async () => {
  try {
    const path = './files/fresh.txt';
    const fileExists = await isFileExist(path);
    if (!fileExists) {
      const data = 'I am fresh and young';
      await fsPromises.writeFile(path, data);
    } else throw new Error();
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
