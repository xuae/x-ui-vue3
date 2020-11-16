module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  // 开启测试覆盖率
  collectCoverage: true,
  // 测试覆盖率文件
  collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**', '!coverage/**'],
  // 测试覆盖率输出文件夹名
  coverageDirectory: 'coverage',
  // 快照的序列化工具
  snapshotSerializers: ['jest-serializer-vue'],
};
