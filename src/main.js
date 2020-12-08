import Vue from 'vue' //importing vue scripts
import App from './App.vue' //importing app to render
//Set up page as you did in the video
Vue.config.productionTip = false

new Vue({ //rendering the new Vue workspace
  render: h => h(App),
}).$mount('#app')
