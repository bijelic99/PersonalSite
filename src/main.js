import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faChevronDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faWhatsapp, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faAngleDown, faChevronDown, faMapMarkerAlt, faFacebookSquare, faWhatsapp, faGithubSquare, faLinkedinIn )



Vue.config.productionTip = false
Vue.use(BootstrapVue)


new Vue({
  render: h => h(App),
}).$mount('#app')
