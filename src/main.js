import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

const app = createApp(App);

import LMap from '@/components/l-map.vue';
import LMarker from '@/components/l-marker.vue';
import LPopup from '@/components/l-popup.vue';
import LTileLayer from '@/components/l-tile-layer.vue';

app.component('l-map', LMap);
app.component('l-marker', LMarker);
app.component('l-popup', LPopup);
app.component('l-tile-layer', LTileLayer);

import 'leaflet/dist/leaflet.css';
import 'tailwindcss/tailwind.css';

app.use(router).mount('#app');
