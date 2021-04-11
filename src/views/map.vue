<template>
  <div>
    <div class="map" id="map"></div>
  </div>
</template>

<script>
import Map from '@/utils/map';
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.map = new Map('map', [39.91328, 116.403931], 17);
    this.map.marker([39.91328, 116.403931]);
    this.map.marker([39.916702, 116.400582], 'success');
    this.map.marker([39.911394, 116.400238], 'warning');
    this.map.marker([39.91146, 116.408016], 'danger');
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.map {
  height: 100vh;
}
</style>
