- tailwindcss
    - 引入
    - 优化
        - 路由的懒加载
        - webpack5 treeshaking
            函数 
        - 按需加载
            ElementPlus 按需加载
            tailwindcss  + typography

- 特点和难点
    - 使用typescript封装了chatgpt 的chat 接口,使用数组维持最近三次上下文，让chatgpt更懂我们
    - 使用tailwindcss 框架，图标库使用的是支持composition-api的 @icon-park/vue-next 
        聊天高亮使用highlight.js, markdown-it 解析markdown 格式为html
    - 聊天内容支持markdown 语法解析，chatgpt返回的代码体验更好
    - 手写封装了Loading，Copy等通用组件
    - 使用crypto.js加解密,提升openai key 的安全性
    - 在获取openai的返回值时，使用fetch二进制流操作解析，逐步添加到页面，类打字机效果
- ts 难点技巧
    在这个项目中，我逐步熟练了ts+vue3的写法。
    - ref dom 节点
    const chatListDom = ref<HTMLDivElement>();
    - ref 响应式
    - reactive 响应式
    - api 接口
    - pinia 
    - types 类型定义
    - 联合和枚举类型
        const btnStatus = ref<"copy" | "loading" | "success" | "error">("copy")
    
