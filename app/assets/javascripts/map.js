var getTrucksURL = 'https://kelsey-food-trucks.herokuapp.com//trucks.json';

// Embarcadero BART Station coordinates
var latitude = 37.7936;
var longitude = -122.3958;

var getTruck = function(truck, map, origin, radius) {
  var truckLatitude = Number(truck['latitude']);
  var truckLongitude = Number(truck['longitude']);
  var truckPosition = new google.maps.LatLng(truckLatitude, truckLongitude);
  var truckHours = truck['days_hours'];
  var truckFood = truck['food_items'];
  var truckAddress = truck['address'];
  var truckName = truck['name'];
  var distance = google.maps.geometry.spherical.computeDistanceBetween(truckPosition, origin);
  if (distance < radius) {
    var newMarker = new google.maps.Marker({
      map: map,
      position: truckPosition,
      title: truckName,
      address: truckAddress,
      food: truckFood,
      hours: truckHours
    });

    newMarker.addListener('click', function() {
      console.log('Clicked tag ' + newMarker.title);
      console.log('Hours: ' + newMarker.hours);
      console.log('Food: ' + newMarker.food);
      console.log('Address: ' + newMarker.address);
    })
  };
};

var getTrucks = function(map, origin, radius) {
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