<template>
  <button :type="nativeType" :class="classes">Button</button>
</template>

<script lang="ts">
import { computed, defineComponent, Prop, toRefs } from 'vue';

export default defineComponent({
  name: 'XButton',
  props: {
    // 原生 type 属性
    nativeType: {
      type: String,
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val);
      },
      default: 'button',
    } as Prop<'button' | 'submit' | 'reset'>,

    // 样式
    stylus: {
      type: String,
      validator: (val: string) => {
        return ['text', 'icon', 'outlined', 'contained', 'toggle'].includes(
          val
        );
      },
    } as Prop<'text' | 'icon' | 'outlined' | 'contained' | 'toggle'>,

    // 类型
    type: {
      type: String,
      validator: (val: string) => {
        return ['flat', 'fab'].includes(val);
      },
    } as Prop<'flat' | 'fab'>,

    // 点击是否有波纹效果
    ripple: {
      type: Boolean,
      default: true,
    },

    // 圆角按钮
    round: {
      type: Boolean,
      default: false,
    },

    // 小尺寸按钮
    small: {
      type: Boolean,
      default: false,
    },

    // 块状按钮
    block: {
      type: Boolean,
      default: false,
    },

    // 禁用按钮
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { stylus, type, ripple, round, small, block, disabled } = toRefs(
      props
    );
    const classes = computed(() => [
      'x-button',
      stylus ? `x-button__${stylus.value}` : undefined,
      type ? `x-button__${type.value}` : undefined,
      {
        'x-button__ripple': ripple.value,
        'x-button__round': round.value,
        'x-button__small': small.value,
        'x-button__block': block.value,
        'x-button__disabled': disabled.value,
      },
    ]);

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'Button';
</style>
