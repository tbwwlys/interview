- 响应式
    - Proxy
    - 平台无关性
- defineProperty proxy 区别
    - 兼容性
        defineProperty es5
        proxy es6
        访问（读写）拦截
    - 逐个属性代理 和 全部代理  
        - 值也是对象
        - df 递归 性能不太好
        - proxy 懒代理的能力
        如果对象只有一层，简单 df 性能更好， proxy 实例化开销大
    - df 不太适合数组代理
        df 设计出来代理对象， push，pop 等不能触发
    - 新增的属性不会自动响应式，proxy 可以
    