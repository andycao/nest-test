import writeXlsxFile from 'write-excel-file/node';

const schema = [
  {
    column: '企业名称',
    type: String,
    value: (obj) => obj.org_name,
  },
  {
    column: '所在省',
    type: String,
    value: (obj) => obj.province_name,
  },
  {
    column: '产品名称',
    type: String,
    value: (obj) => obj.prod_name,
  },
  {
    column: '产品详细名称',
    type: String,
    value: (obj) => obj.prod_name_1,
  },
  {
    column: '规格型号',
    type: String,
    value: (obj) => obj.models,
  },
  {
    column: '产品等级',
    type: String,
    value: (obj) => obj.prod_level,
  },
  {
    column: '生产日期/批号',
    type: String,
    value: (obj) => obj.prod_date,
  },
  {
    column: '抽查结果',
    type: String,
    value: (obj) => obj.effect,
  },
  {
    column: '承检机构',
    type: String,
    value: (obj) => obj.org,
  },
  {
    column: '抽查时间',
    type: String,
    value: (obj) => obj.org_date,
  },
  {
    column: '抽查类型',
    type: String,
    value: (obj) => obj.chou,
  },
  {
    column: '抽样单位',
    type: String,
    value: (obj) => obj.chou_name,
  },
  {
    column: '主要不合格项目',
    type: String,
    value: (obj) => obj.no_hege,
  },
  {
    column: '抽样来源',
    type: String,
    value: (obj) => obj.chou_laiyuan,
  },
];

async function writeExcel(data: any[], fileName: string) {
  return await writeXlsxFile(data, {
    schema,
    filePath: `/Users/didi/Sites/node/nest-test/download/${fileName}.xlsx`,
  });
}

export default writeExcel;
