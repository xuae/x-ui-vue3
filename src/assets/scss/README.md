# SCSS 样式

## 文档目录结构
```
├─components                 #组件，对应 src/components 下的组件样式
│  └─xxx.scss                #xxx组件样式文件
│
├─functions                  #函数指令
│  └─_index.scss             #
│
├─mixins                     #混合指令 
│  └─_index.scss             #
│
├─placeholders               #占位符选择器
│  └─_index.scss             #
│
├─variables                  #变量
│  ├─_colors.scss            #颜色变量
│  ├─_fonts.scss             #字体变量
│  ├─_index.scss             #默认变量
│  ├─_theme-dark.scss        #暗色主题
│  └─_theme-light.scss       #亮色主题
│
├─_utils.scss                #工具，引入函数、%、变量等
├─base.scss                  #配置全局样式，引入工具类和重置样式
├─README.md                  #scss文件说明
└─reset.scss                 #重置全局样式
```
