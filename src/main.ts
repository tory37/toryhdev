import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faArrowDown,
  faBars,
  faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';
import {
  faTimesCircle,
  faBuilding,
  faDotCircle,
  faCalendarAlt
} from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faArrowUp,
  faArrowDown,
  faBars,
  faTimesCircle,
  faDotCircle,
  faBuilding,
  faGithub,
  faLinkedin,
  faTwitter,
  faGlobeAmericas,
  faCalendarAlt
);

Vue.component('FAIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
