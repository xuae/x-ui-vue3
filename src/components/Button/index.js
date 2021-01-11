// 配置对外引用
import './Button.scss';
import Button from './Button.vue';

// 提供 install 方法
// 这里提供一次 install 是为了便于单独引入组件时进行注册
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

// 默认导出方式导出
export default Button;
