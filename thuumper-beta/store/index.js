import Vue from 'vue';
import Vuex from 'vuex';

import taskManager from './taskManager';

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      // example
      taskManager,
    },
  });

  return Store;
}
