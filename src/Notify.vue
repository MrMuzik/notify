<style lang="scss">
.notify {
  position: absolute;
  width: 150px;
  top: 20px;
  display: inline-block;
  padding: 15px;
  background-color: #aaa;
  color: #222;
  right: 20px;
  // Keep this in sync with timeout
  transition: right 0.5s ease;

  * {
    margin: 0;
    padding: 0;
  }

  &.slide-fade-enter,
  &.slide-fade-leave-to {
    right: -190px;
  }

  &:hover {
    cursor: pointer;
    ::after {
      content: "Close";
      position: absolute;
      top: 10px;
      right: 10px;
      font-family: sans-serif;
      line-height: 1;
      font-size: 10px;
      display: inline-block;
    }
  }
}
.display-none {
  display: none !important;
}
</style>

<template>
<transition name="slide-fade">
  <div class="notify" v-if="active" :style="topPos" @click="updateActive(false)">
      <p>{{message}}</p>
  </div>
</transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "notify",
  data() {
    return {
      top: 0
    };
  },
  computed: {
    // Allows state to be mounted as computed properties
    ...mapState(["active", "queue", "message", "autoDismiss"]),
    topPos: function() {
      // Set to display at top of user's view
      return `top:${this.top}px`;
    }
  },
  beforeUpdate() {
    this.top = window.scrollY + 20;
  },
  updated() {},
  watch: {
    active: function() {
      if (!this.active && this.queue.length) {
        this.removeFromQueue();
      }
    },
    queue: function() {
      if (!this.active && this.queue.length) {
        setTimeout(() => {
          this.notify();
        }, 500);
      }
    }
  },
  methods: {
    ...mapMutations(["notify", "removeFromQueue", "updateActive"])
  }
};
</script>