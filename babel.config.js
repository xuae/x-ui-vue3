module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'css', 'markup'],
        plugins: ['line-numbers', 'match-braces', 'copy-to-clipboard'],
        theme: 'tomorrow',
        css: true,
      },
    ],
  ],
};
