import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as fb from 'firebase/app'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
     // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyCq1RpjqvYpExABFlI-O2EuQQDi0UQxq4Y',
      authDomain: 'onlinestore-a41f8.firebaseapp.com',
      databaseURL: 'https://onlinestore-a41f8.firebaseio.com',
      projectId: 'onlinestore-a41f8',
      storageBucket: 'onlinestore-a41f8.appspot.com',
      messagingSenderId: '639762892367'
    }
    fb.initializeApp(config)
  }
})
