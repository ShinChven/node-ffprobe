// export * from './module';
import {exec} from 'child_process';

const ffprobe = async (filepath: string) => {
  return new Promise((resolve, reject) => {
    exec(`ffprobe -v quiet -print_format json -show_format -show_streams "${filepath}"`, (err, stdout) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(stdout));
      }
    });
  });
}

export default ffprobe;
