// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */
/* eslint 'no-multiple-empty-lines': [2, {'max': 99999, 'maxEOF': 0}] */

import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
// vue bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' // Vuesax styles

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { FormModel } from 'ant-design-vue'
Vue.config.productionTip = false
Vue.use(FormModel)
Vue.use(Antd)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuesax)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
