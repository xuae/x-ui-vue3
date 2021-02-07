<template>
  <section class="layout">
    <header class="layout__header">
      XUI - 基于谷歌 Material Design 设计规范的 Vue 3.x UI 组件库
    </header>
    <section class="layout__container">
      <aside class="layout_sidebar">
        <router-link v-for="item in sidebar" :key="item.path" :to="item.path">
          {{ item.title }}
        </router-link>
      </aside>
      <main class="content">
        <router-view />
      </main>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const components: Array<any> = require('@/components/index.json');
const sidebar = Object.values(components).map(item => {
  return {
    path: `/components/${item.name}`,
    title: item.title,
  };
});

export default defineComponent({
  name: 'Layout',
  setup() {
    return {
      sidebar,
    };
  },
});
</script>

<style lang="scss" scoped>
$header-height: 64px;
$sidebar-width: 200px;
$padding: 12px;

.layout {
  min-height: 100vh;
  padding-top: $header-height;

  &__header {
    @include depth(2);
    position: fixed;
    z-index: 1;
    width: 100%;
    height: $header-height;
    line-height: $header-height;
    top: 0;
    padding: 0 $padding;
    background: $color-white;
  }

  &__container {
    display: flex;
    height: 100%;

    .layout_sidebar {
      position: fixed;
      width: $sidebar-width;
      min-width: $sidebar-width;
      height: 100%;
      padding: $padding;
      border-right: 1px solid $color-border;

      a {
        display: block;
        text-decoration: none;
        color: $color-text-primary;
        line-height: 30px;

        &:hover,
        &.router-link-active {
          color: $color-primary;
        }
      }
    }

    .content {
      flex: 1;
      padding: $padding $padding $padding $sidebar-width + $padding;
      overflow: auto;
    }
  }
}
</style>
