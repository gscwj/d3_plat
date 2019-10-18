import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

/*导入全部文件element-ui*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import * as d3 from 'd3'
Vue.prototype.$d3 = d3;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
