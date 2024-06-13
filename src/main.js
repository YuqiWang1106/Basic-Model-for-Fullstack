import Vue from 'vue'
import Homepage from './views/HomePage.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  router,
  render: (h) => h(Homepage),
}).$mount('#app');