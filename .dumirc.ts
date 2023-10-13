import { defineConfig } from 'dumi';

export default defineConfig({
    apiParser: {},
    resolve: {
        // 配置入口文件路径，API 解析将从这里开始
        entryFile: './src/index.ts',
    },
    exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
});