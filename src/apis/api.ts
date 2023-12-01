import axios from 'axios';

function buildParams(page: number, year: number) {
  const data = `__filterSet=%5B%7B%22name%22%3A%22checkYear%22%2C%22type%22%3A%22EQUAL%22%2C%22value%22%3A%22${year}%22%7D%5D&page=${page}&rows=300`;

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://psp.e-cqs.cn/ecqsNationalCheckWeb/jsonClient.action?encoding=true&jsonValue=%7B%22serviceClassName%22%3A%22com.itown.searchs.microservice.JdccService%22%2C%22methodName%22%3A%22listTask%22%2C%22serviceObject%22%3Anull%2C%22type%22%3Anull%2C%22params%22%3A%5B%5D%7D',
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      Cookie:
        '__jsluid_s=e5e8717b105284f39171055f9d844537; JSESSIONID=0007m9Nr5j2V_pzOK-MYtvdZX0h:279N3MR09C:3MQNVDR7GP:-3L93R; JSESSIONID=0007m9Nr5j2V_pzOK-MYtvdZX0h:279N3MR09C:3MQNVDR7GP:-3L93R; __jsluid_s=e32f64fd52cef1702410cd53831b87d0',
      Origin: 'https://psp.e-cqs.cn',
      Pragma: 'no-cache',
      Referer: 'https://psp.e-cqs.cn/ecqsNationalCheckWeb/jdcc/jdcc.jsp',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'X-Requested-With': 'XMLHttpRequest',
      'sec-ch-ua':
        '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
    },
    data: data,
  };

  return config;
}

export function runFetch(page: number, year: number) {
  const config = buildParams(page, year);
  return axios
    .request(config)
    .then((response) => {
      return response.data.returnValue.value;
    })
    .catch((error) => {
      console.log(error);
    });
}
