export const isFileExist = async (path) => {
  try {
    await fsPromises.access(path);
    return true;
  } catch (err) {
    return false;
  }
};
