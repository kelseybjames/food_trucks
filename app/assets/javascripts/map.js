var getTrucksURL = 'https://kelsey-food-trucks.herokuapp.com//trucks.json';

// Embarcadero BART Station coordinates
var myLatLng = new google.maps.LatLng(37.7936, -122.3958);

var getTruck = function(truck, map, radius, origin) {
  var latitude = Number(truck['latitude']);
  var longitude = Number(truck['longitude']);
  var position = new google.maps.LatLng(latitude, longitude)
  var name = truck['name'];
  var distance = google.maps.geometry.spherical.computeDistanceBetween(position, origin);
  console.log(distance);
  if (distance < radius) {
    var newMarker = new google.maps.Marker({
      map: map,
      position: position,
      title: name
    });
  };
};

var getTrucks = function(map, origin) {
  $.get(getTrucksURL, function(trucks) {
    trucks.forEach(function(truck) {
      getTruck(truck, map, radius, origin);
    })
  })
};

var getClickCoords = function(map) {
  google.maps.event.addListener(map, 'click', function(event) {
    myLatLng = event.latLng;
  });
}

$(document).ready(function initMap(radius) {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 15
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Embarcadero BART Station'
  });

  getTrucks(map, myLatLng, radius);

  getClickCoords(map);
});