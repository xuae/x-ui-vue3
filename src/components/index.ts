/**
 * 组件库对外导出的组件集合，对整个组件进行导出
 * 由 './build/bin/build-entry.js' 文件自动生成
 */

import { App } from 'vue';

// 引入全局基础样式
import '../assets/scss/base.scss';

// 导入组件（用于注册所有组件）
import Button from './button';
import Icon from './icon';

// 定义组件列表
const components = [
  Button,
  Icon,
];

const install = function (app: App) {
  // 注册所有组件
  components.forEach(component => {
    app.component(component.name, component);
  });
};

export default {
  version: '0.1.0',
  // 导出的对象必须具有 install 方法，才能被 Vue.use() 方法安装
  install,
};

// 具名导出
export {
  Button,
  Icon,
}
