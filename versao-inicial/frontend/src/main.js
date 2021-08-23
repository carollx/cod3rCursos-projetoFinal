import 'font-awesome/css/font-awesome.css'
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faUserCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// TEMPORÁRIO!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkNhcm9sIEFsdmVzIiwiZW1haWwiOiJjYXJvbEBlbWFpbC5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjI5NzMzOTg0LCJleHAiOjE2Mjk5OTMxODR9.NG5dDtFfIfdQMKNyPCI1EFKJGrzVPkPw0YYJ-hcJ3rU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')