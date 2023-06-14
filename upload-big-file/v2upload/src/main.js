import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Progress, // 展示文件上传的进度
  Table
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue
  .use(Button)
  .use(Progress)
  .use(Table)
new Vue({
  render: h => h(App),
}).$mount('#app')
