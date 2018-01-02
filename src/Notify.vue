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
  // Keep this in sync with timeout
  transition: right 0.5s ease;

  * {
    margin: 0;
    padding: 0;
  }

  &.open {
    right: 20px;
  }
}
.display-none {
  display: none !important;
}
</style>

<template>
<div class="notify" :class="{'open': active}">
    <p>{{message}}</p>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "notify",
  data() {
    return {};
  },
  computed: {
    // Allows state to be mounted as computed properties
    ...mapState(["active", "queue", "message"]),
    visible: function() {
      // Get this watchable
      let rect = this.$el.getBoundingClientRect();
      //return rect.x < window.innerWidth;
      return rect.x;
    }
  },
  mounted() {
    //console.log(this.$store);
  },
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
    ...mapMutations(["notify", "removeFromQueue"])
  }
};
</script>