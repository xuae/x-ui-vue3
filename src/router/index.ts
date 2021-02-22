import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const LoadingComponent = {
  template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
};
const ErrorComponent = {
  template: `
    <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
};
const getAsyncComponent = (func: any) => {
  return defineAsyncComponent({
    loader: func,
    delay: 0,
    timeout: 30000,
    // errorComponent: ErrorComponent,
    // loadingComponent: LoadingComponent,
  });
};
const components: Array<any> = require('@/components/index.json');
const componentRoutes = Object.values(components).map(item => {
  return {
    path: item.name,
    name: item.name,
    component: getAsyncComponent(
      () => import(`../components/${item.name}/README.md`)
    ),
    meta: { title: item.title },
  };
});

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { path: '/components' },
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('@/views/components/Layout.vue'),
    children: componentRoutes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
});

router.beforeEach((to, from) => {
  const title = to.meta?.title;
  if (title) {
    document.title = `${title} | x-ui`;
  }
});

export default router;
