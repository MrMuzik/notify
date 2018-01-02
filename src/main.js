import Vue from "vue";
import Vuex from "vuex";
import { store } from "./stores/store.js";
import App from "./App.vue";
import Notify from "./Notify.vue";

Vue.use(Vuex);

new Vue({
  store,
  el: "#app",
  render: h => h(App)
});

new Vue({
  store,
  el: "#notify",
  render: h => h(Notify)
});
