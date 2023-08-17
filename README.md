08-15
1. 强化使用enum枚举，针对类似状态等可变化值进行封装
2. 如何使用vite中的URL，并且动态backimage
3. 写一篇新手入门必备篇
08-16
1. 阅读vue3源码01
   1.1  了解元编程Proxy
        描述：

        用途：
          1.1.1 校检器，如想获取number，而不能为string
          1.1.2 私有变量
        与Object.defineProperty的区别
          1. Object.defineProperty只能针对属性进行配置，所以导致新增属性无效，最明显的就在vue2中可以提现出来
          
2. 涉及到找不到声明文件，可以尝试使用查找@types/xxxx类型声明
   并且确认tsconfig.json 配置正确，包含了xxx的类型声明
