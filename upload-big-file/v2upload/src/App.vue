<template>
  <div id="app">
    <div>
        <input 
          type="file"
          :disabled="status != Status.wait"
          @change="handleFileChange"
        >
        <el-button @click="handleUpload" :disabled="uploadDisabled">upload</el-button>
    </div>
    <div>
      <div>
        caculate chunk hash
      </div>
      <el-progress :percentage="hashPercentage"></el-progress>
    </div>
  </div>
</template>

<script>
// import { resolve } from 'path';

const SIZE = 10 * 1024 * 1024;
const Status = {
  wait: "wait",
  pause: "pause",
  uploading: "uploading"
}

export default (await import ('vue')).defineComponent({
  name: 'App',
  data: () => ({
    Status,
    status: Status.wait,
    // 文件对象
    container: {
      file: null
    },
    data: [], // 切片上传数据数组
    // xhr 列表
    requestList: [],
    hashPercentage: 0 // hash 计算进度
  }),
  computed: {
    uploadDisabled () {
      return (
        !this.container.file || // 未上传文件
        [Status.pause, Status.uploading].includes(this.status)
      )
    }
  },
  methods: {
    handleFileChange (e) {
      const [file] = e.target.files;
      if (!file) return;
      this.resetData()
      this.container.file = file;
    },
    // 如何取消xhr 请求 abort 中止
    resetData () {
      this.requestList.forEach(xhr => xhr?.abort( ))
      this.requestList = [];
      
    },

    async handleUpload () {
      if (!this.container.file) return 

      this.status = Status.uploading;

      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList);
      // 耗时计算任务
      this.container.hash = await this.caculateHash(fileChunkList)
      // map 转变为 请求前的状态
      this.data = fileChunkList.map(({ file }, index)=> ({
          fileHash: this.container.hash + "-" + index,
          index,
          chunk: file.size,
          percentage: 0
      })) 
    },
    caculateHash (fileChunkList) {
      // 主线程 -> woker 线程
      return new Promise (resolve => {
        
        this.container.worker = new Worker("/hash.js")
        this.container.worker.postMessage({ fileChunkList });
        this.container.worker.onmessage = e => {
          const { percentage, hash } = e.data;
          this.hashPercentage = percentage;
          if (hash) {
            resolve(hash)
          }
        }
      })
    },
    createFileChunk (file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({file: file.slice(cur, cur + size)})
        cur += size;
      }
      return fileChunkList;
    }
  }

})
</script>

<style>

</style>
