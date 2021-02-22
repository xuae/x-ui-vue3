<template>
  <i
    v-bind="$attrs"
    class="x-icon"
    :class="type ? `x-icon__${type}` : ''"
    :style="styles"
  >
    {{ name }}
  </i>
</template>

<script lang="ts">
import { computed, defineComponent, Prop, toRefs } from 'vue';
import VueProp from '@/utils/VueProp';

export default defineComponent({
  name: 'XIcon',
  props: {
    // 图标名称
    name: {
      type: String,
      required: true,
    },

    // 尺寸
    size: {
      type: [String, Number],
    },

    // 颜色
    color: {
      type: String,
    },

    // 类型
    type: {
      type: String,
      validator: VueProp.oneOf(['outlined', 'round', 'sharp', 'twoTone']),
    } as Prop<'outlined' | 'round' | 'sharp' | 'twoTone'>,
  },
  setup(props, { attrs }) {
    const { size, color } = toRefs(props);
    const styles = computed(() => {
      const style: { [key: string]: string } = {};
      if (size) {
        style.fontSize = `${size.value}px`;
      }
      if (color && color.value) {
        style.color = color.value;
      }
      if (attrs.onClick) {
        style.cursor = 'pointer';
      }
      return style;
    });

    return { styles };
  },
});
</script>
