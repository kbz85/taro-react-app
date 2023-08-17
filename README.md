## 08-15

1.  强化使用 enum 枚举，针对类似状态等可变化值进行封装
2.  如何使用 vite 中的 URL，并且动态 backimage
3.  写一篇新手入门必备篇
    08-16
4.  阅读 vue3 源码 01
    1.1 了解元编程 Proxy
    描述：

         用途：
           1.1.1 校检器，如想获取number，而不能为string
           1.1.2 私有变量
         与Object.defineProperty的区别
           1. Object.defineProperty只能针对属性进行配置，所以导致新增属性无效，最明显的就在vue2中可以提现出来

5.  涉及到找不到声明文件，可以尝试使用查找@types/xxxx 类型声明
    并且确认 tsconfig.json 配置正确，包含了 xxx 的类型声明

## 08-17

1.  在 taro 中安装 tailwindcss
    1.1 `pnpm add -D tailwindcss postcss autoprefixer weapp-tailwindcss`
    1.2 `npx tailwindcss init`
    1.3 初始化 tailwind.config.js 文件
    ```js
    /** @type {import('tailwindcss').Config} \*/
    export default {
      // 不在 content 包括的文件内编写的 class，不会生成对应的工具类
      content: ["./public/index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
      // 其他配置项
      // ...
      corePlugins: {
        // 不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
        preflight: false,
      },
    };
    ```

    1.4 手动创建 postcss.config.js，并注册 Tailwindcss
    ```js
    module.exports = {
      plugins: {
        tailwindcss: {},
      },
    };
    ```

    1.5 config/index 中注册 weapp-tailwindcss
    ```js
      import { UnifiedWebpackPluginV5 } from "weapp-tailwindcss/webpack";

      pxtransform: {
        enable: true,
        // 设置成 false 表示 不去除 * 相关的选择器区块
        // 假如开启这个配置，它会把 tailwindcss 整个 css var 的区域块直接去除掉
        // 需要用 config 套一层，官方文档上是错的
        config: {
          removeCursorStyle: false,
        },
      },

      chain.merge({
        plugin: {
          install: {
            plugin: UnifiedWebpackPluginV5,
            args: [
              {
                appType: "taro",
              },
            ],
          },
        },
      });
    ```

    1.6 项目入口引入Tailwindcss
    ```js
    @import 'tailwindcss/base';
    @import 'tailwindcss/utilities';
    @import 'tailwindcss/components';
    ```
