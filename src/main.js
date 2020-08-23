import Vue from 'vue';
import VueRecognizer from 'vue-recognizer';
import { VueHammer } from 'vue2-hammer'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import './assets/css/main.css';
import './script.js';
import VueTilt from 'vue-tilt.js';
import App from './App.vue';
import router from './router';
import Default from './layouts/Default.vue';

Vue.use(Buefy);
Vue.use(VueTilt);
Vue.use(VueRecognizer);
Vue.use(VueHammer)
Vue.component('default-layout', Default);
Vue.config.productionTip = false;

VueHammer.config.swipe = {
  threshold: 200
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
