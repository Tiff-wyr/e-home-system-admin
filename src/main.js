import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/init.css'
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
Vue.use(Element);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
