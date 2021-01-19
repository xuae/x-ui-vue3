# 组件

## 文档目录结构
```
├─xxx                        #组件 xxx，文件夹名采用 kebab-case 的命名方式
│  ├─__tests__               #单元测试文件
│  |  ├─__snapshots__        #单元测试快照
│  │  |  └─xxx.spec.ts.snap  #组件 Xxx 单元测试快照，由执行 test:unit 命令自动生成
│  |  │
│  |  └─xxx.spec.ts          #组件 Xxx 单元测试
│  │
│  ├─src                     #组件源码
│  │  └─Xxx.vue              #组件 Xxx，文件名采用 PascalCase 的命名方式
│  │
│  └─index.ts                #组件入口文件，必须有此文件才能被打包
│
├─index.json                 #组件名和组件入口文件的对应 json 字符串，由 build-entry.js 自动生成
├─index.ts                   #组件打包入口文件，由 build-entry.js 自动生成
└─README.md                  #文件说明
```

## 文件代码规范
1. 一个文件夹代表一个组件，文件夹采用 kebab-case 的命名方式
1. 每个文件夹下必须有 `index.ts` 文件，才能被打包构建
1. 单元测试需写在 `__test__` 文件夹下
1. vue 文件需写在 `src` 文件夹下，且文件名采用 PascalCase 的命名方式

## 单元测试 `xxx.spec.ts`
```typescript
import { shallowMount } from '@vue/test-utils';
import Xxx from '@/components/xxx/src/Xxx.vue';

describe('Xxx.vue', () => {
  it('create', () => {
    const wrapper = shallowMount(Xxx);
    expect(wrapper.element).toMatchSnapshot();
  });
});
```

## 源文件 `Xxx.vue`
```vue
<template>
  
</template>

<script lang="ts">
import { computed, defineComponent, Prop, toRefs } from 'vue';

export default defineComponent({
  name: 'Xxx',
  props: {
  },
  setup(props) {
    return {

    };
  },
});
</script>

<style lang="scss" scoped>
</style>
```

## 入口文件 `index.ts`
```typescript
// 配置对外引用
import '../../assets/scss/components/button.scss';
import Xxx from './src/Xxx.vue';

// 提供 install 方法
// 这里提供一次 install 是为了便于单独引入组件时进行注册
Xxx.install = function (Vue: any) {
  Vue.component(Xxx.name, Xxx);
};

// 默认导出方式导出
export default Xxx;
```
