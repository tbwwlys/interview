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
  </div>
</template>

<script>
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
    // xhr 列表
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
    handleUpload () {
      if (!this.container.file) return 
      this.status = Status.uploading;

      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList);
      
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
