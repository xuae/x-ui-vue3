// 配置对外引用
import '../../assets/scss/components/icon.scss';
import Icon from './src/Icon.vue';

// 提供 install 方法
// 这里提供一次 install 是为了便于单独引入组件时进行注册
Icon.install = function (Vue: any) {
  Vue.component(Icon.name, Icon);
};

// 默认导出方式导出
export default Icon;
