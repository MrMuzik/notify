import Vue from "vue";
import Vuex from "vuex";

// Tell VUE to use VUEX
Vue.use(Vuex);

// Create the store
export const store = new Vuex.Store({
  state: {
    active: false,
    message: "",
    queue: [],
    timeout: 3000
  },
  mutations: {
    // Can only pass a single payload - object needed for multiple values
    notify(state) {
      state.active = true;
      state.message = state.queue[0].msg;
      state.timeout = state.queue[0].timeout ? state.queue[0].timeout : state.timeout;

      setTimeout(() => {
        state.active = false;
      }, state.timeout);
    },
    addToQueue(state, payload) {
      state.queue.push(payload);
    },
    removeFromQueue(state) {
      state.queue.shift();
    }
  }
});
