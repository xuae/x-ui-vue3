import { createApp } from 'vue';
import App from '@/App.vue';
import DemoBlock from '@/views/components/DemoBlock.vue';
import router from '@/router';
import store from '@/store';
import XUI from '@/components';

const app = createApp(App);

// 根据文件内容获取全部图标，并绑定在 app 上
const icons = require('@/assets/fonts/material-icons/icons.json');
const files = require.context(
  '@/assets/fonts/material-icons',
  false,
  /.codepoints$/
);
files.keys().forEach(key => {
  const fileName = key.replace(/(\.\/|-Regular.codepoints)/g, '');
  const content = files(key).default;
  icons[fileName] = content.split('\n').map((val: string) => val.split(' ')[0]);
});
console.log(icons);
app.config.globalProperties.$icon = icons;

app.component(DemoBlock.name, DemoBlock);
app.use(XUI);
app.use(store);
app.use(router);
app.mount('#app');

// @ts-ignore
if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
  // @ts-ignore
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
}
