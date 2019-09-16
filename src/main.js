import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faChevronDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faWhatsapp, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
require('intersection-observer');
import VueObserveVisibility from 'vue-observe-visibility'
var VueScrollTo = require('vue-scrollto');




Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faAngleDown, faChevronDown, faMapMarkerAlt, faFacebookSquare, faWhatsapp, faGithubSquare, faLinkedinIn )



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueObserveVisibility)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')
