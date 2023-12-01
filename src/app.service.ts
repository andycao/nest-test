import { Injectable } from '@nestjs/common';

import { runFetch } from './apis/api';
import writeExcel from './utils/writeToExcel';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // cn exam file 产品抽检
  runFetch(): Promise<any> {
    return new Promise(async (resolve) => {
      let list = [];
      for (let i = 1; i <= 7; i++) {
        const temp = await runFetch(i, 2022);
        list = list.concat(temp);
      }
      console.log('total', list.length);

      await writeExcel(list, 'file2022');

      resolve(list.length);
    });
  }
}
