<template>
  <div class="map" id="map"></div>
</template>

<script>
// import L from '@/utils/leaflet.js';
import L from 'leaflet';
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const options = {
        attribution: '660e',
        maxZoom: 18,
        minZoom: 16
      };
      this.map = L.map('map', {
        crs: L.CRS.Baidu,
        center: [39.91328, 116.403931],
        zoom: 17
      });
      L.tileLayer.chinaProvider('Baidu.Normal.Map', options).addTo(this.map);
    }
  }
};
</script>

<style lang="less" scoped>
.map {
  height: 100vh;
}
</style>
