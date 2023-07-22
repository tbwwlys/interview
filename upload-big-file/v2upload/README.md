# v2upload

- 大文件上传前端细节
    - 切片基于html5 file 二进制流 按自己切片
    - md5 计算
        - 普通计算， 阻塞主线程，极限测试
        - requestIdCallback 时间分片
        - html5 Worker 独立线程
