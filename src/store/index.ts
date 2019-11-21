import Vue from 'vue';
import Vuex from 'vuex';

import * as sidebar from '@/store/modules/sidebar.ts';
import * as resume from '@/store/modules/resume.ts';
import * as portfolio from '@/store/modules/portfolio.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    resume,
    portfolio
  }
});
