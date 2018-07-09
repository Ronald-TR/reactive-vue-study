// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Buefy from 'buefy'
// import 'buefy/lib/buefy.css'
// import Carousel from 'bulma-carousel'
// import 'bulma-carousel/dist/css/bulma-carousel.min.css'
// import 'bulma-carousel/dist/js/bulma-carousel.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
require('jquery/dist/jquery')
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// var carousels = Carousel.attach();
// Vue.use(Buefy)
// Vue.use(Carousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
