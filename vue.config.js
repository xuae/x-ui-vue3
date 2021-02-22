const path = require('path');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  lintOnSave: false,
  publicPath: './', // 部署应用包时的基本 URL 为相对路径
  runtimeCompiler: true, // 运行时编译
  css: {
    sourceMap: !IS_PRODUCTION,
    loaderOptions: {
      scss: {
        // 引入全局变量
        additionalData: `@import "@/assets/scss/_utils.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue', 'vue/dist/vue.esm-bundler.js');

    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('markdown-loader')
      .loader(path.resolve(__dirname, './build/md-loader.js'))
      .end();

    config.module
      .rule('codepoints')
      .test(/\.codepoints$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
};
