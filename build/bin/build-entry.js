/* 自动生成打包的入口文件 */

const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;
const render = require('json-templater/string');
// 检测是否是文件
const isFile = path => fs.lstatSync(path).isFile();

// 组件包的路径
const PATH_PACKAGE = path.join(__dirname, '../../src/components/');
// 输出的入口文件路径，根据此文件生成 npm 包
const PATH_OUTPUT = path.join(PATH_PACKAGE, 'index.js');
// 组件文件夹下的入口文件名
const ENTRY_FILE = 'index.js';

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
      return true;
    } catch (err) {
      console.log(`${name} 文件夹下没有可访问的 ${ENTRY_FILE} 入口文件`);
      return false;
    }
  })
  .map(name => {
    return {
      name,
      entry: `./${name}/${ENTRY_FILE}`,
    };
  });

const importList = components.map(item =>
  render(`import {{name}} from '{{entry}}';`, {
    name: item.name,
    entry: item.entry,
  })
);
const installList = components.map(item =>
  render(`  {{name}}`, {
    name: item.name,
  })
);
const exportList = components.map(item =>
  render(`  {{name}}`, {
    name: item.name,
  })
);

const TEMPLATE = `/**
 * 组件库对外导出的组件集合，对整个组件进行导出
 * 由 './build/bin/build-entry.js' 文件自动生成
 */

// 导入组件（用于注册所有组件）
{{importList}}

// 定义组件列表
const components = [
{{installList}},
];

const install = function (Vue) {
  // 判断是否安装过
  // if (install.installed) {
  //   return;
  // }

  // 注册所有组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 默认导出
export default {
  version: '{{version}}',
  // 导出的对象必须具有 install 方法，才能被 Vue.use() 方法安装
  install,
  // 具体的组件列表
{{exportList}},
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
console.log('[build entry] DONE:', PATH_OUTPUT);

const jsonList = components.map(item =>
  render(`  "{{name}}": "{{entry}}"`, item)
);
const TEMPLATE_JSON = `{
{{list}}
}
`;
const jsonTemp = render(TEMPLATE_JSON, {
  list: jsonList.join(`,${endOfLine}`),
});
fs.writeFileSync(path.join(PATH_PACKAGE, 'index.json'), jsonTemp);
