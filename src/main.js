import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import types from './store/types'

import debounce from 'lodash.debounce'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function getScreenSize () {
  let windowWidth = window.innerWidth;

  if (windowWidth >= 1200) {
    store.commit(types.SET_DESKTOP_VERSION, true);
  } else {
    store.commit(types.SET_DESKTOP_VERSION, false);
  }
}

window.addEventListener('resize', debounce(getScreenSize, 200));
