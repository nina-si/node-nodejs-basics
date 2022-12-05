import fs from 'fs';
import { isFileExist } from '../utils.js';

const copy = async () => {
  try {
    const baseUrl = import.meta.url;
    const copyDirPath = new URL('./files_copy', baseUrl);
    const isDirExist = await isFileExist(copyDirPath);
    console.log(isDirExist);

    if (isDirExist) {
      throw new Error('FS operation failed');
    }

    const sourcePath = new URL('./files', baseUrl);
    const destinationPath = new URL('./files_copy', baseUrl);

    fs.cp(sourcePath, destinationPath, { recursive: true }, (err) => {
      if (err) throw new Error('FS operation failed');
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
