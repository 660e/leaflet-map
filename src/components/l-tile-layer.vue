<template>
  <div></div>
</template>

<script>
import { tileLayer } from 'leaflet';

export default {
  props: {
    urlTemplate: {
      type: String,
      default: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  mounted() {
    this.$parent.tileLayer(tileLayer(this.urlTemplate));
  }
};
</script>
