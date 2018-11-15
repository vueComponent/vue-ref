import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import ref from '../../index.js'
import 'ant-design-vue/dist/antd.css'


Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(ref)
new Vue({
  render: h => h(App)
}).$mount('#app')
