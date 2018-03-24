import Vue from "vue";
import Vuex from "vuex";

// Tell VUE to use VUEX
Vue.use(Vuex);

// Create the store
export const store = new Vuex.Store({
  state: {
    active: false,
    message: "",
    title: "",
    queue: [],
    timeout: 3000,
    autoDismiss: true
  },
  mutations: {
    // Can only pass a single payload - object needed for multiple values
    notify(state) {
      state.active = true;
      state.autoDismiss =
        state.queue[0].autoDismiss === false
          ? state.queue[0].autoDismiss
          : true;
      state.message = state.queue[0].msg;
      state.title = state.queue[0].title
        ? state.queue[0].title
        : "Notification";
      state.timeout = state.queue[0].timeout
        ? state.queue[0].timeout
        : state.timeout;

      if (state.autoDismiss) {
        setTimeout(() => {
          state.active = false;
        }, state.timeout);
      }
    },
    addToQueue(state, payload) {
      state.queue.push(payload);
    },
    removeFromQueue(state) {
      state.queue.shift();
    },
    updateActive(state, payload) {
      state.active = payload;
    }
  }
});
