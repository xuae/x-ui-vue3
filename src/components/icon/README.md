# Icon 图标
常用的字体图标。

## 代码演示

### 名称

使用`name`属性来定义图标的样式，具体请看下面的图标集合。

:::demo
```html
<template>
  <x-icon name="home" />
  <x-icon name="favorite" />
  <x-icon name="filter_vintage" />
</template>
```
:::

### 颜色

使用`color`属性来定义图标的颜色。

:::demo
```html
<template>
  <x-icon name="home" />
  <x-icon name="home" color="red" />
  <x-icon name="home" color="#2196f3" />
  <x-icon name="home" color="rgb(255, 152, 0)" />
</template>
```
:::

### 大小

使用`size`属性来定义图标的大小，单位`px`。

:::demo
```html
<template>
  <x-icon name="home" />
  <x-icon name="home" size="36" />
  <x-icon name="home" :size="48" />
</template>
```
:::

### 点击事件

:::demo
```html
<template>
  <x-icon name="home" @click="onClick"/>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const onClick = e => {
      console.log('[Icon Click]:', e);
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

## 图标集合

### 文件类图标

<ul class="icon-list">
  <li v-for="name in $icon.file" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 编辑类图标

<ul class="icon-list">
  <li v-for="name in $icon.editor" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 地理类图标

<ul class="icon-list">
  <li v-for="name in $icon.maps" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 全部

<ul class="icon-list">
  <li v-for="name in $icon.all" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

## API

### Props

::: warning

注意

_*_ 表示必填项

:::

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| name _*_ | 图标名称 | _string_ | 请查看上面的图标集合 | — |
| color | 图标的颜色 | _string_ | — | — |
| size | 图标的大小，单位`px` | _string \| number_ | — | — |

### Events
| 事件名称  | 说明      | 回调参数  |
| --------- | --------- | --------- |
| click     | 点击按钮时的回调  | *event: Event*   |
