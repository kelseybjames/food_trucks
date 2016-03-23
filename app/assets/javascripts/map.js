var getTrucksURL = 'https://kelsey-food-trucks.herokuapp.com//trucks.json';

// Embarcadero BART Station coordinates
var latitude = 37.7936;
var longitude = -122.3958;

var getTruck = function(truck, map, radius, origin) {
  console.log('got to getTruck');
  var truckLatitude = Number(truck['latitude']);
  var truckLongitude = Number(truck['longitude']);
  console.log('Truck latitude: ' + truckLatitude);
  console.log('Truck longitude: ' + truckLongitude);
  var truckPosition = new google.maps.LatLng(truckLatitude, truckLongitude)
  var truckName = truck['name'];
  var distance = google.maps.geometry.spherical.computeDistanceBetween(truckPosition, origin);
  console.log(distance);
  if (distance < radius) {
    var newMarker = new google.maps.Marker({
      map: map,
      position: truckPosition,
      title: truckName
    });
  };
};

var getTrucks = function(map, origin, radius) {
  console.log('got to getTrucks');
  $.get(getTrucksURL, function(trucks) {
    trucks.forEach(function(truck) {
      getTruck(truck, map, origin, radius);
    })
  })
};

var getClickCoords = function(map) {
  google.maps.event.addListener(map, 'click', function(event) {
    latitude = event.latLng.lat();
    longitude = event.latLng.lng();
    console.log('Latitude: ' + latitude);
    console.log('Longitude: ' + longitude);
  });
};

function initMap(radius) {
  var myLatLng = new google.maps.LatLng(latitude, longitude);
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
    title: 'Your Location'
  });

  getTrucks(map, myLatLng, radius);

  getClickCoords(map);
};