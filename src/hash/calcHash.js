import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
  const filePath = new URL(
    './files/fileToCalculateHashFor.txt',
    import.meta.url
  );

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Error while reading data');
    } else {
      const hash = crypto.createHash('sha256').update(data).digest('hex');
      console.log(hash);
    }
  });
};

await calculateHash();
