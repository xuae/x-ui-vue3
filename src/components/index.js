/**
 * 组件库对外导出的组件集合，对整个组件进行导出
 * 由 './build/bin/build-entry.js' 文件自动生成
 */

// 导入组件（用于注册所有组件）
import Button from './Button/index.js';

// 定义组件列表
const components = [
  Button,
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
  version: '0.1.0',
  // 导出的对象必须具有 install 方法，才能被 Vue.use() 方法安装
  install,
  // 具体的组件列表
  Button,
};

// 具名导出
export {
  Button,
}
