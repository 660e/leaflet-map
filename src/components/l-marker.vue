<template>
  <div></div>
</template>

<script>
import { marker, icon } from 'leaflet';

export default {
  props: {
    latlng: {
      type: Array,
      default: () => [0, 0]
    }
  },
  mounted() {
    const options = {
      icon: icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        shadowSize: [41, 41]
      })
    };
    this.$parent.marker(marker(this.latlng, options));
  }
};
</script>
