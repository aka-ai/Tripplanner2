const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1Ijoia2FuamFuYWNoYXQiLCJhIjoiY2p6OG1pNW4zMTk1dDNjcWl1cXg2cWxncSJ9.uLLeViGFF1ATBMV1rOCWvg";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

//create a database
//create a function to populate database
//create a function to pull info from the database
//create a function to update the UI

// Select between hotels, restaurants and activities (the application will fetch all these data using AJAX)
// Select and set the hotel
// Select and add a restaurant
// Select and add an activity
// Remove the hotel
// Remove a restaurant
// Remove an activity