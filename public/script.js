let map = L.map('map').setView([0,0], 2); // adjust as needed

let currentLayer;

function addTileLayer(month) {
  if (currentLayer) {
    map.removeLayer(currentLayer);
  }

  currentLayer = L.tileLayer(`/${month}/{z}/{x}/{y}.png`, {
    attribution: `Month: ${month}`,
    maxZoom: 6,
    minZoom: 0,
	noWrap: true,
    tms: false,
    errorTileUrl: '',
  }).addTo(map);
}

map.fitBounds([
  [40, -180], 
  [90, 180]   
]);
// Init with January
addTileLayer(7);

// Update layer on dropdown change
document.getElementById('monthSelector').addEventListener('change', (e) => {
  addTileLayer(e.target.value);
});
