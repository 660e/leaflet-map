<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { popup } from 'leaflet';

export default {
  mounted() {
    const options = {
      offset: [0, -20]
    };
    this.$parent.bindPopup(popup(options).setContent(this.$el));
  }
};
</script>
