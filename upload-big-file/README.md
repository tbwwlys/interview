# 大文件上传
- 后端 难点介绍
    - 大文件上传 处理视频或音频
    - 后端使用mvc 设计模式
        入口文件安排 跨越 bodyParser 鉴权 数据库连接中间件 路由中间件 错误处理中间件
    - 路由交给controller 负责参数校验和逻辑
    - controller 交给 service 负责数据存储
    - middlewares 文件夹提供鉴权 参数校验 密码 md5 等等函数
    - 使用面向对象思想来组织代码
    - node 异步无阻塞
        EventEmitter 是很多io操作的基类
        node 的 event loop 是 IO 操作的关键 提升性能
    - es6 class 任然是原型式 
        fse -> fs -> EventEmitter
        KOA的class extends EventEmitter
- 大文件上传的关键
    用户体验
    功能的实现
    - 切片
        大文件上传失败的概率大  TCP/IP
        Promise.all 并发    数组有上限的
        后端 合并文件 二进制流的文件
    - 断点续传
        已经上传的不用上传
    - 秒传
        hash

- 如何用命令行测试文件上传
    

stream