import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const helpers = {
  initialise(element, center, zoom) {
    const _ = L.map(element, { center, zoom });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(_);

    return _;
  }
};

class Map {
  constructor(element, center, zoom) {
    this.map = helpers.initialise(element, center, zoom);
  }

  version() {
    return '1.0.0';
  }
}

export { Map };
