// const { EventEmitter } = require("stream")
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const Controller = require("./controller")
const http = require('http');

const server = http.createServer();
// server 是什么？ EventEmitter
const controller = new Controller() // 面向对象思想
server.on("request", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Header', "*")
    // 复杂跨域请求
    if (req.method === "OPTIONS") {
        res.status = 200;
        res.end();
        return;
    }

    if (req.url === '/') {
        await controller.handleFormData()
    }

    if (req.url === '/merge') {
        await controller.handleMerge()
    }

    if (req.url === '/verify') {
        await controller.handleVerifyUpload()
    }

    if (req.url === '/delete') {
        await controller.deleteFiles()
    }
})
server.listen(3000, () => {
    console.log('listening port 3000')
})
// console.log(server instanceof EventEmitter)