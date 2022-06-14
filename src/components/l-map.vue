<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { map, tileLayer } from 'leaflet';

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
    this.map = map(this.$el, options).addLayer(tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));
  }
};
</script>
