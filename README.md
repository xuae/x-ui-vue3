# x-ui-vue3

## TODO

- [ ] 组件
    - [ ] Tree
        - [ ] 动态加载时，加载失败，应取消loading状态
        - [ ] 没有数据时，提示“暂无数据”
    - [ ] 指令
        - [ ] v-loading，加载状态
- [ ] 单元测试
- [ ] 文档，自动生成，自动部署
- [ ] 打包发布到 npm，自动生成 type 文件
- [ ] 自动生成 changelog

## NPM
- 打包测试: `npm pack`
- 测试安装: `npm install [打包后的 tgz 文件路径]`

## 项目命令
```
yarn             // 安装依赖项
yarn serve       // 启动开发项目
yarn build       // 构建项目
yarn build:file  // 构建入口文件
yarn build:lib   // 构建 npm 包
yarn test:unit   // 单元测试
yarn test:e2e    // 端对端测试
yarn lint        // 格式化代码
```

## src 目录结构

```
│
├─assets                     #静态资源
│  ├─fonts                   #字体
│  │  └─xxx                  #
│  │
│  └─scss                    #样式
│     └─xxx                  #
│
├─components                 #组件包
│  └─xxx                     #xxx组件
│     ├─__tests__            #单元测试
│     │
│     ├─src                  #组件源码
│     │
│     └─index.ts             #组件入口文件
│
└─views                      #组件文档页面
   ├─components              #页面内需要用到的组件
   │
   ├─Home.vue                #
   └─                        #
```
