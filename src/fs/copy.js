import fs from 'fs';
import { isFileExist } from '../utils.js';

const copy = async () => {
  try {
    const baseUrl = import.meta.url;
    const copyDirPath = new URL('./files_copy', baseUrl);
    const isDirExist = await isFileExist(copyDirPath);

    if (isDirExist) {
      throw new Error('FS operation failed');
    }

    fs.cp('./files', './files_copy', { recursive: true }, (err) => {
      if (err) throw new Error('FS operation failed');
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
