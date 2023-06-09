// node 不用class 名字
const multiparty = require('multiparty')

const path = require('path')

const fse = require('fs-extra')

const UPLOAD_DIR = path.resolve(__dirname, "..", "target"); // 

const extractExt = filename => filename.slice(filename.lastIndexOf("."), filename.length);

// 写入文件流
const pipeStream = (path, writeStream) => {
    return new Promise(resolve => {
        // 继承
        const readStream = fse.createReadStream(path);
        readStream.on("end", () => {
            fse.unlinkSync(path)    // 释放链接
            resolve()
        })
        readStream.pipe(writeStream)
    })
}


module.exports = class {
    // 单个切片上传
    async handleFormData(req, res) {
        // 先收集中间件
        // const multipart = new multipart.Form();
        // console.log('lllllllllllllll')
        
    }
    // 合并所有切片
    async handleMerge() {

    }
    // 上传过了吗
    async handleVerifyUpload () {

    }   

    async deleteFiles () {

    }
}