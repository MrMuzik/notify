<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <button class="notifyMe" @click.prevent="addToQueue({title: 'This is a bit of a long title', msg:'hey yo', timeout: 5000})">hey yo</button>
    <button class="notifyMe" @click.prevent="addToQueue({msg:'somemo', timeout: 1000})">somemo</button>
    <button class="notifyMe" @click.prevent="addToQueue({msg:'you no', autoDismiss: false})">you no</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    // Allows mutations to be mounted as methods
    ...mapMutations(["addToQueue"])
  }
};
</script>