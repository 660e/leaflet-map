<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { map } from 'leaflet';

export default {
  props: {
    center: {
      type: Array,
      default: () => [0, 0]
    },
    zoom: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      map: null
    };
  },
  mounted() {
    const options = {
      center: this.center,
      zoom: this.zoom
    };
    this.map = map(this.$el, options);
  },
  methods: {
    tileLayer(l) {
      this.$nextTick(() => l.addTo(this.map));
    },
    marker(m) {
      this.$nextTick(() => m.addTo(this.map));
    }
  }
};
</script>
