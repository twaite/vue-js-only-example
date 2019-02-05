import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    restaurants: [
      {
        name: 'Restaurant One',
      },
      {
        name: 'Restaurant Two',
      },
      {
        name: 'Restaurant Three',
      },
    ]
  }
});

export default store;