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
    console.log(L);
    this.map = L.map('map', {
      crs: L.CRS.Baidu,
      center: [39.91328, 116.403931],
      zoom: 17
    });
    L.tileLayer.chinaProvider('Baidu.Normal.Map').addTo(this.map);
  }
};
</script>

<style lang="less" scoped>
.map {
  height: 100vh;
}
</style>
