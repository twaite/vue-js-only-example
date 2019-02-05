import Vue from 'vue'
import App from './App.jsx'
import store from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
