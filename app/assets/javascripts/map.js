var getTrucksURL = 'https://kelsey-food-trucks.herokuapp.com//trucks.json';
var yellowTag = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';

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
  var $truckModal = $('#truckModal');
  var truckModalClose = document.getElementsByClassName("close")[0];
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

    var modalString = 'Address: ' + newMarker.address + '\nHours: ' + newMarker.hours + '\nFood: ' + newMarker.food;

    newMarker.addListener('click', function() {
      $('#truck-container').show();
      $('#truckName').text('Name: ' + newMarker.title);
      $('#truckAddress').text('Address: ' + newMarker.address);
      $('#truckHours').text('Hours: ' + newMarker.hours);
      $('#truckFoods').text('Food: ' + newMarker.food);
    });
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
    title: 'Your Location',
    icon: yellowTag
  });

  google.maps.event.addListener(map, 'click', function(event) {
    marker.setPosition(event.latLng);
    setTimeout(function() {
      map.panTo(event.latLng);
    }, 150);
  });

  getTrucks(map, myLatLng, radius);
  getClickCoords(map);
};