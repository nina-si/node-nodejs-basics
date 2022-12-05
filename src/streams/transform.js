import { Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    },
  });
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
