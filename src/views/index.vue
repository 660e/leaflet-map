<template>
  <div class="font-mono h-screen">
    <div id="map" class="h-full"></div>
  </div>
</template>

<script>
import { Map } from '@/helper/map';

export default {
  name: 'leaflet-map',
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.map = new Map({
      el: 'map',
      center: [39.906217, 116.3912757],
      zoom: 16
    });
  }
};
</script>
