import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'fastUI',
    footer: false,
    exportStatic: false,
    nav: [
      { title: '指南', link: '/guide' },
      { title: '工具', link: '/utils' },
      { title: '组件', link: '/components' },
    ],
    esm: {
      // ...
      ignores: [
        'src/**/demo/**', // 避免打包demo文件到npm包里面
      ],
    },
  },
});
