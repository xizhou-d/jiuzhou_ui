import { defineConfig } from 'dumi';

let base: string | undefined = '/jiuzhou_ui'
let publicPath: string | undefined = '/jiuzhou_ui/'

if (process.env.SITE_BUILD_ENV === 'preview') {
    base = undefined
    publicPath = undefined
}

export default defineConfig({
    apiParser: {},
    resolve: {
        // 配置入口文件路径，API 解析将从这里开始
        entryFile: './src/index.ts',
    },
    outputPath: 'doc-site',
    exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
    // base 和 publicPath 最后在 github 上发布的时候查找资源用，如果不配置，到时候找不到 css 和 js 文件
    base,
    publicPath
});