# 虚拟列表

- 假如有十万条数据如何渲染
任务做到一定时间后，判断是否接近浏览器的轮询时间，如果达到了，就暂停一段时间

首先需要考虑
    - 大数据
        异步
        内存放得下
    - JS 执行时间
        DOM编程 createElement appendChild
        同步的
        超过了 JS 单元运行时间，
    - 渲染时间


    - 分片机制 时间分片
        requestAnimationFrame 宏任务
        requestIdleCallback   react fiber 微任务 大的DOM树
        如何查看开销时间
        如何去看浏览器的面板和优化建议

- 第一个同步的console.log() JS单线程
    尽快执行完idle 阶段
    requestIdleCallback unit time
    setTimeout(,0)
    定时器在js 中不准确  0 = 20ms
    渲染时间
- chrome的performance 面板可以直接提供

- 除了时间切片还可以怎么做？
    - 虚拟列表
    getBoundingClientRect()
    何必一次性渲染那么多列表项呢
    只渲染可见部分的 + onscroll 响应式 startIndex endIndex 



防抖：多次触发事件，在一段时间内执行最后一次
节流： 一段时间过了之后，才能继续触发，触发之后，事件禁止，过一段时间后解除禁制

操作系统轮询

- 前端性能
- python 基础语法
- 进程 线程的概念
- 为什么要用vue
- 栈和队列的应用场景