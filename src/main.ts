import { createApp } from 'vue';
import App from '@/App.vue';
import DemoBlock from '@/views/components/DemoBlock.vue';
import router from '@/router';
import store from '@/store';
import XUI from '@/components';

const app = createApp(App);
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
