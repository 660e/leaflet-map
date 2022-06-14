<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { icon, marker } from 'leaflet';

export default {
  props: {
    latlng: {
      type: Array,
      default: () => [0, 0]
    }
  },
  data() {
    return {
      marker: null
    };
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
    this.marker = marker(this.latlng, options);
    this.$parent.marker(this.marker);
  },
  methods: {
    bindPopup(p) {
      this.$nextTick(() => this.marker && this.marker.bindPopup(p));
    }
  }
};
</script>
