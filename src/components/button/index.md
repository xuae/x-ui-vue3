# Button 按钮
常用的操作按钮。

## 代码演示

### 测试demo块2

测试demo块2

:::tip

测试tip

:::

:::warning

测试warning

:::

:::error

测试error

:::

:::success

测试success

:::

:::demo

```html
<template>
  <x-button>默认按钮</x-button>
  <x-button color="primary">主要按钮</x-button>
  <div class="demo" @click="onClick">测试点击事件</div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const onClick = () => {
      alert('click');
    };

    return {
      onClick,
    }
  },
})
</script>
```

:::

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<template>
  <x-button>默认按钮</x-button>
  <x-button color="primary">主要按钮</x-button>
  <x-button color="success">成功按钮</x-button>
  <x-button color="info">信息按钮</x-button>
  <x-button color="warning">警告按钮</x-button>
  <x-button color="danger">危险按钮</x-button>
</template>
```
:::

## API

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
