/* 自动生成打包的入口文件 */

const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;
const render = require('json-templater/string');
const upperCamelcase = require('uppercamelcase');
// 检测是否是文件
const isFile = path => fs.lstatSync(path).isFile();

// 组件包的路径
const PATH_PACKAGE = path.join(__dirname, '../../src/components/');
// 输出的入口文件路径，根据此文件生成 npm 包
const PATH_OUTPUT = path.join(PATH_PACKAGE, 'index.ts');
// 组件文件夹下的入口文件名
const ENTRY_FILE = 'index.ts';
const DOC_FILE = 'README.md';

// 组件文件夹及其入口文件路径
const components = fs
  .readdirSync(PATH_PACKAGE)
  .filter(name => {
    const folderPath = path.join(PATH_PACKAGE, name);
    try {
      if (isFile(folderPath)) {
        return false;
      }
      const entryPath = path.join(folderPath, ENTRY_FILE);
      fs.accessSync(entryPath, fs.constants.R_OK | fs.constants.W_OK);
      const docPath = path.join(folderPath, DOC_FILE);
      fs.accessSync(docPath, fs.constants.R_OK | fs.constants.W_OK);
      return true;
    } catch (err) {
      console.log(
        `${name} 文件夹下没有可访问的 "${ENTRY_FILE}" 入口文件，或者没有 "${DOC_FILE}" 说明文件`
      );
      return false;
    }
  })
  .map(name => {
    let title = name;
    const folderPath = path.join(PATH_PACKAGE, name);
    const docPath = path.join(folderPath, DOC_FILE);
    try {
      const doc = fs.readFileSync(docPath, { encoding: 'utf-8' }).trim();
      // 获取 markdown 文件第一行
      const [firstLine] = doc.split('\n');
      // 选择二级标题后的文字作为文档标题
      const arr = firstLine.split(/^#\s/);
      // 若没有标题，则使用默认值
      title = arr[1] || title;
    } catch (err) {
      console.warn('[读取组件文档出错]：', err);
    }
    return {
      name: name,
      componentName: upperCamelcase(name),
      title: title,
      entry: `./${name}`,
    };
  });

const importList = components.map(item =>
  render(`import {{componentName}} from '{{entry}}';`, {
    componentName: item.componentName,
    entry: item.entry,
  })
);
const installList = components.map(item =>
  render(`  {{componentName}}`, {
    componentName: item.componentName,
  })
);
const exportList = components.map(item =>
  render(`  {{componentName}}`, {
    componentName: item.componentName,
  })
);

const TEMPLATE = `/**
 * 组件库对外导出的组件集合，对整个组件进行导出
 * 由 './build/bin/build-entry.js' 文件自动生成
 */

// 引入全局基础样式
import '../assets/scss/base.scss';

// 导入组件（用于注册所有组件）
{{importList}}

// 定义组件列表
const components = [
{{installList}},
];

const install = function (Vue: any) {
  // 判断是否安装过
  // if (install.installed) {
  //   return;
  // }

  // 注册所有组件
  // @ts-ignore
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue);
}

export default {
  version: '{{version}}',
  // 导出的对象必须具有 install 方法，才能被 Vue.use() 方法安装
  install,
};

// 具名导出
export {
{{exportList}},
}
`;

const template = render(TEMPLATE, {
  version: process.env.VERSION || require('../../package.json').version,
  importList: importList.join(endOfLine),
  installList: installList.join(`,${endOfLine}`),
  exportList: exportList.join(`,${endOfLine}`),
});

fs.writeFileSync(PATH_OUTPUT, template);
console.log('[build entry] DONE:', PATH_OUTPUT, '\n');

const TEMPLATE_JSON_ITEM = `  "{{name}}": {
    "name": "{{name}}",
    "title": "{{title}}",
    "componentName": "{{componentName}}"
  }`;
const jsonList = components.map(item => render(TEMPLATE_JSON_ITEM, item));
const TEMPLATE_JSON = `{
{{list}}
}
`;
const jsonTemp = render(TEMPLATE_JSON, {
  list: jsonList.join(`,${endOfLine}`),
});
const PATH_JSON = path.join(PATH_PACKAGE, 'index.json');
fs.writeFileSync(PATH_JSON, jsonTemp);
console.log('[build json] DONE:', PATH_JSON, '\n');
