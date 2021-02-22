<template>
  <i v-bind="$attrs" class="x-icon" :style="styles">{{ name }}</i>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

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
  },
  setup(props, { attrs, slots, emit }) {
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
