<template>
  <div class="font-mono h-screen">
    <l-map :center="center" :zoom="zoom" class="h-full">
      <l-tile-layer />
      <l-marker :latlng="center" />
    </l-map>
  </div>
</template>

<script>
export default {
  name: 'leaflet-map',
  data() {
    return {
      center: [39.906217, 116.3912757],
      zoom: 16
    };
  }
};
</script>
