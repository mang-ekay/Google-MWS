var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiZWtheSIsImEiOiJjam5mdms3dWUyd2NmM3dvZXhnZnM1Nmo5In0.u7P5Cam1k_aBON0gD5WpGA';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v10'
});
