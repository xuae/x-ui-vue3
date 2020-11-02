<template>
  <button :type="nativeType" :class="classes">Button2</button>
</template>

<script>
import { computed, defineComponent, toRefs } from 'vue';

const nativeTypes = ['button', 'submit', 'reset'];

const styluses = ['text', 'icon', 'outlined', 'contained', 'toggle'];

const types = ['flat', 'fab'];

export default defineComponent({
  name: 'XButton2',
  props: {
    // button 原生 type
    nativeType: {
      type: String,
      validator(val) {
        return nativeTypes.includes(val);
      },
    },

    // 样式
    stylus: {
      type: String,
      validator(val) {
        return styluses.includes(val);
      },
    },

    // 类型
    type: {
      type: String,
    },

    // 点击是否有波纹效果
    ripple: {
      type: Boolean,
      default: true,
    },

    // 是否圆角按钮
    round: {
      type: Boolean,
      default: false,
    },

    // 是否小尺寸按钮
    small: {
      type: Boolean,
      default: false,
    },

    // 是否是块状按钮，填充整行
    block: {
      type: Boolean,
      default: false,
    },

    // 是否禁用按钮
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { stylus, type, small, ripple, round, disabled } = toRefs(props);
    const classes = computed(() => [
      'x-button',
      stylus ? `x-button__${stylus.value}` : '',
      type ? `x-button__${type.value}` : '',
      {
        'x-button__small': small.value,
        'x-button__ripple': ripple.value,
        'x-button__round': round.value,
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
@import 'XButton';
</style>
