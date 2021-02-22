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

### 风格类型

::: warning
注意

并非所有的图标风格都不一样，具体请查看下面的【全部】图标分类
:::

使用`type`属性来定义图标的风格。
- `outlined`: 线框图标
- `round`: 圆角图标
- `sharp`: 尖角图标
- `twoTone`: 双色图标

:::demo
```html
<template>
  <x-icon name="home" size="48" />
  <x-icon name="home" size="48" type="outlined" />
  <x-icon name="home" size="48" type="round" />
  <x-icon name="home" size="48" type="sharp" />
  <x-icon name="home" size="48" type="twoTone" />
  <br>
  <x-icon name="account_box" size="48" />
  <x-icon name="account_box" size="48" type="outlined" />
  <x-icon name="account_box" size="48" type="round" />
  <x-icon name="account_box" size="48" type="sharp" />
  <x-icon name="account_box" size="48" type="twoTone" />
  <br>
  <x-icon name="camera_alt" size="48" />
  <x-icon name="camera_alt" size="48" type="outlined" />
  <x-icon name="camera_alt" size="48" type="round" />
  <x-icon name="camera_alt" size="48" type="sharp" />
  <x-icon name="camera_alt" size="48" type="twoTone" />
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
| type | 图标的风格类型 | _string_ | outlined / round / sharp / twoTone | — |

### Events
| 事件名称  | 说明      | 回调参数  |
| --------- | --------- | --------- |
| click     | 点击按钮时的回调  | *event: Event*   |

## 图标集合

::: tip
提示

仅展示一部分分类图标，需要查看全部的图标，请往下翻到【全部】处
:::

### 箭头类图标({{$icon.arrow.length}})
<ul class="icon-list">
  <li v-for="name in $icon.arrow" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 文件类图标({{$icon.file.length}})

<ul class="icon-list">
  <li v-for="name in $icon.file" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 编辑类图标({{$icon.editor.length}})

<ul class="icon-list">
  <li v-for="name in $icon.editor" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 地理类图标({{$icon.maps.length}})

<ul class="icon-list">
  <li v-for="name in $icon.maps" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

## 全部

### 默认图标({{$icon.MaterialIcons.length}})

<ul class="icon-list">
  <li v-for="name in $icon.MaterialIcons" :key="name">
    <i class="x-icon">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 线框风格({{$icon.MaterialIconsOutlined.length}})

<ul class="icon-list">
  <li v-for="name in $icon.MaterialIconsOutlined" :key="name">
    <i class="x-icon x-icon__outlined">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 圆角风格({{$icon.MaterialIconsRound.length}})

<ul class="icon-list">
  <li v-for="name in $icon.MaterialIconsRound" :key="name">
    <i class="x-icon x-icon__round">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 尖角风格({{$icon.MaterialIconsSharp.length}})

<ul class="icon-list">
  <li v-for="name in $icon.MaterialIconsSharp" :key="name">
    <i class="x-icon x-icon__sharp">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>

### 双色图标({{$icon.MaterialIconsTwoTone.length}})

<ul class="icon-list">
  <li v-for="name in $icon.MaterialIconsTwoTone" :key="name">
    <i class="x-icon x-icon__twoTone">{{name}}</i>
    <span class="icon-caption">{{name}}</span>
  </li>
</ul>
