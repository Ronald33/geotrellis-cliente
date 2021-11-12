/* Map */
var map = L.map('map');
map.setView([-15.708471, -71.278902], 6);
/* End Map */

/* Values Map */
var base = new L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png");
var processed = new L.tileLayer("http://localhost:7075/{z}/{x}/{y}", {maxNativeZoom: 13, maxZoom: 18});
/* End Values Map */

/* Adding Map Base */
base.addTo(map);
// base.setZIndex(0);
/* End Adding Map Base */

map.addLayer(processed);