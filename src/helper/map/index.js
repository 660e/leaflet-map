import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const helpers = {
  initialise(el, center, zoom) {
    const _ = L.map(el, { center, zoom });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(_);

    return _;
  }
};

class Map {
  constructor(options) {
    this.map = helpers.initialise(options.el, options.center, options.zoom);
  }

  version() {
    return '1.0.0';
  }
}

export { Map };
