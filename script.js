let map = L.map('map').setView([50, -100], 3); // adjust as needed

let currentLayer;

function addTileLayer(month) {
  if (currentLayer) {
    map.removeLayer(currentLayer);
  }

  currentLayer = L.tileLayer(`/${month}/{z}/{x}/{y}.png`, {
    attribution: `Month: ${month}`,
    maxZoom: 6,
    minZoom: 0,
    tms: false,
    errorTileUrl: '',
  }).addTo(map);
}

// Init with January
addTileLayer(1);

// Update layer on dropdown change
document.getElementById('monthSelector').addEventListener('change', (e) => {
  addTileLayer(e.target.value);
});
