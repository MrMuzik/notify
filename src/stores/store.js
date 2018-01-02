import Vue from "vue";
import Vuex from "vuex";

// Tell VUE to use VUEX
Vue.use(Vuex);

// Create the store
export const store = new Vuex.Store({
  state: {
    active: false,
    message: "std store message"
  },
  mutations: {
    // Can only pass a single payload - object needed for multiple values
    notify(state, payload) {
      state.active = true;
      state.message = payload.msg;
      if (payload.timeout) {
        setTimeout(() => {
          state.active = false;
        }, payload.timeout);
      }
    }
  }
});
