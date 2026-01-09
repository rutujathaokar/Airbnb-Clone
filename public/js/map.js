// Data is available in the 'listing' variable (passed from show.ejs)
// Note: Mapbox uses [longitude, latitude], but Leaflet map functions often prefer [latitude, longitude]
// We will rely on the coordinates being stored as [longitude, latitude] in the listing.geometry.coordinates array.

const lng = listing.geometry.coordinates[0];
const lat = listing.geometry.coordinates[1];
const ZOOM_LEVEL = 9;

// 1. Initialize the map
const map = L.map('map').setView([lat, lng], ZOOM_LEVEL);

// 2. Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 3. Create a marker and popup
const marker = L.marker([lat, lng]).addTo(map);

// 4. Set the popup HTML
marker.bindPopup(
    `<b>${listing.title}</b><p>${listing.location}, ${listing.country}</p>`
).openPopup();