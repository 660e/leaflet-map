import L from 'leaflet';
// import L from './leaflet.js';
import 'proj4leaflet';
import 'leaflet.chinatmsproviders/src/leaflet.ChineseTmsProviders.js';

import 'leaflet/dist/leaflet.css';
import './index.less';

const Icon = L.Icon.extend({
  options: {
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    shadowUrl: require('../../assets/map/marker-shadow.svg'),
    shadowSize: [40, 40]
  }
});
const iconMarkerPrimary = new Icon({ iconUrl: require('../../assets/map/marker-primary.svg') });
const iconMarkerSuccess = new Icon({ iconUrl: require('../../assets/map/marker-success.svg') });
const iconMarkerWarning = new Icon({ iconUrl: require('../../assets/map/marker-warning.svg') });
const iconMarkerDanger = new Icon({ iconUrl: require('../../assets/map/marker-danger.svg') });

function init(el, center, zoom) {
  const _ = L.map(el, {
    crs: L.CRS.Baidu,
    center,
    zoom
  });

  const options = {
    attribution: '660e',
    maxZoom: 18,
    minZoom: 16
  };

  L.tileLayer.chinaProvider('Baidu.Normal.Map', options).addTo(_);

  return _;
}

class Map {
  constructor(el, center, zoom) {
    this.map = init.call(this, el, center, zoom);
  }

  marker(latlng, type) {
    const _ = this.map;

    let icon;

    switch (type) {
      case 'success':
        icon = iconMarkerSuccess;
        break;
      case 'warning':
        icon = iconMarkerWarning;
        break;
      case 'danger':
        icon = iconMarkerDanger;
        break;
      default:
        icon = iconMarkerPrimary;
        break;
    }

    return L.marker(latlng, { icon }).addTo(_);
  }
}

export default Map;
