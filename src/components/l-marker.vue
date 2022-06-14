<template>
  <div></div>
</template>

<script>
import { marker, icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

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
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        shadowUrl: markerShadow,
        shadowSize: [41, 41]
      })
    };
    this.$parent.marker(marker(this.latlng, options));
  }
};
</script>
