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
    this.map = new Map('map', [39.91328, 116.403931], 17);
  }
};
</script>
