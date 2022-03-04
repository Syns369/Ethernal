import Vue from 'vue'
import App from './App.vue'
import UPNG from './UPNG.js'
// import Store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // store: Store
}).$mount('#app')
