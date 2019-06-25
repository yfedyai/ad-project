import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/router'
import store from './store'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyD1aXEDdFEwj238bo7wGY6_XqcfsMGmBmM",
      authDomain: "ad-app-b17b4.firebaseapp.com",
      databaseURL: "https://ad-app-b17b4.firebaseio.com",
      projectId: "ad-app-b17b4",
      storageBucket: "ad-app-b17b4.appspot.com",
      messagingSenderId: "1032826054243",
      appId: "1:1032826054243:web:44d401f7fc1927a5"
    };
    fb.initializeApp (firebaseConfig)
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser',user)
      }
    })
    this.$store.dispatch('fetchAds')
  },
}).$mount('#app')
