import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

const app = createApp(App);

// leaflet
import 'proj4leaflet';
import 'leaflet.chinatmsproviders/src/leaflet.ChineseTmsProviders.js';
import 'leaflet/dist/leaflet.css';
import './styles/leaflet.less';

app.use(router).mount('#app');
