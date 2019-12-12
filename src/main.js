import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

require('@/assets/scss/default.scss');

new Vue({
  router,
  store,
  render: h => h(App),
  data : {
    state : store.state
  }
}).$mount('#app');
