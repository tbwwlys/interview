1. 在浏览器中输入URL并回车后都发生了什么？ 
https://www.baidu.com  ->  DNS 匹配 Ip -> 拿到真实 Ip -> 建立连接(TCP三次握手) -> 拿数据渲染页面 -> 四次挥手
url 是 Ip 的一个映射 
https: 传输协议（http 和 tcp 之间加了一层 TSL 或 SSL 的安全层 ）
www. : 服务器
baidu.com: 域名

1.1 第一次访问
1.2 第二次访问 将域名解析的IP 存放到 本地 -> 读取浏览器缓存

ping www.baidu.com 测试连接

          display: none; 隐藏节点  
html -> dom树   ->   
                    render tree 渲染树 -> 计算布局信息 -> ui引擎渲染 ->  用户所见页面
css -> css结构体 ->
    并行构建