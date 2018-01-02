<style lang="scss">
.notify {
  position: absolute;
  width: 150px;
  top: 20px;
  right: -190px;
  display: inline-block;
  padding: 15px;
  background-color: #aaa;
  color: #222;
  transition: right 0.5s ease;

  * {
    margin: 0;
    padding: 0;
  }

  &.open {
    right: 20px;
  }
}
</style>

<template>
<div class="notify" :class="{'open': active}">
    <p>{{message}}</p>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "notify",
  data() {
    return {};
  },
  computed: {
    // Allows state to be mounted as computed properties
    ...mapState(["active", "message"])
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {}
};
</script>