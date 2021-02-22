<template>
  <div
    class="demo-block"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <!-- 代码生成 vue 示例 -->
    <div class="source">
      <slot name="source" />
    </div>
    <!-- 示例描述说明 -->
    <div v-if="$slots.description" class="description">
      <slot name="description" />
    </div>
    <!-- 示例代码高亮显示 -->
    <div class="highlight" :style="{ maxHeight: isExpanded ? '1000px' : 0 }">
      <slot />
    </div>
    <!-- 查看 | 隐藏 代码块按钮 -->
    <div
      ref="control"
      class="demo-block-control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded"
    >
      <transition name="text-slide">
        <span>{{ isExpanded ? '隐藏' : '查看' }}代码</span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

//@ts-ignore
import Prism from 'prismjs';

export default defineComponent({
  name: 'DemoBlock',
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });

    const hovering = ref(false);
    const isExpanded = ref(false);
    const fixedControl = ref(false);

    return {
      hovering,
      isExpanded,
      fixedControl,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo-block {
  border: solid 1px $color-border;
  border-radius: 4px;
  transition: 0.2s;
  margin-bottom: 12px;

  &:hover {
    @include depth(1);
  }

  .source {
    padding: 24px;
  }

  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px $color-border;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fafafa;

    ::v-deep(p) {
      margin: 0;
      line-height: 26px;
    }
  }

  .highlight {
    font-size: 14px;
    line-height: 1.5;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.2s;
    ::v-deep(pre) {
      background-color: #282c34;
      margin: 0;
    }
  }

  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>
