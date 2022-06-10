import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

class Map {
  constructor(el, center, zoom) {
    this.map = L.map(el, { center, zoom });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }
}

export { Map };
