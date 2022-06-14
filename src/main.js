import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

const app = createApp(App);

import LMap from '@/components/l-map.vue';

app.component('l-map', LMap);

import 'leaflet/dist/leaflet.css';
import 'tailwindcss/tailwind.css';

app.use(router).mount('#app');
