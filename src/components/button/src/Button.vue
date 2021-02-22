<template>
  <button :type="nativeType" :class="classes" v-bind="$attrs">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, Prop, toRefs } from 'vue';
import Util from '@/utils/Util';
import VueProp from '@/utils/VueProp';

export default defineComponent({
  name: 'XButton',
  props: {
    // 块状按钮
    block: {
      type: Boolean,
      default: false,
    },

    // 颜色
    color: {
      type: String,
      validator: VueProp.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
      ]),
    } as Prop<
      'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
    >,

    // 禁用按钮
    disabled: {
      type: Boolean,
      default: false,
    },

    // 原生 type 属性
    nativeType: {
      type: String,
      validator: VueProp.oneOf(['button', 'submit', 'reset']),
      default: 'button',
    } as Prop<'button' | 'submit' | 'reset'>,

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

    // 样式
    stylus: {
      type: String,
      validator: VueProp.oneOf([
        'text',
        'icon',
        'outlined',
        'contained',
        'toggle',
      ]),
    } as Prop<'text' | 'icon' | 'outlined' | 'contained' | 'toggle'>,

    // 类型
    type: {
      type: String,
      validator: VueProp.oneOf(['flat', 'fab']),
    } as Prop<'flat' | 'fab'>,
  },
  setup(props) {
    const {
      block,
      color,
      disabled,
      ripple,
      round,
      small,
      stylus,
      type,
    } = toRefs(props);
    const classes = computed(() =>
      Util._.compact([
        'x-button',
        color ? `x-button__${color.value}` : undefined,
        stylus ? `x-button__${stylus.value}` : undefined,
        type ? `x-button__${type.value}` : undefined,
        {
          'x-button__block': block.value,
          'x-button__disabled': disabled.value,
          'x-button__ripple': ripple.value,
          'x-button__round': round.value,
          'x-button__small': small.value,
        },
      ])
    );

    return {
      classes,
    };
  },
});
</script>
