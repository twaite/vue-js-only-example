import Vue from 'vue'
import { hooks } from 'vue-hooks';
import App from './App.tsx'
import store from './store';

Vue.config.productionTip = false

Vue.use(hooks);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
