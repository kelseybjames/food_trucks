var getTrucksURL = 'https://kelsey-food-trucks.herokuapp.com//trucks.json';

var getTruck = function(truck, map, meters, origin) {
  console.log('got here');
  var latitude = Number(truck['latitude']);
  var longitude = Number(truck['longitude']);
  var position = new google.maps.LatLng(latitude, longitude)
  console.log(position);
  var name = truck['name'];
  var distance = google.maps.geometry.spherical.computeDistanceBetween(position, origin);
  console.log(distance);
  if (distance < meters) {
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
      getTruck(truck, map, 200, origin);
    })
  })
};

function initMap() {
  // Embarcadero BART Station coordinates
  var myLatLng = new google.maps.LatLng(37.7936, -122.3958);

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

  getTrucks(map, myLatLng);
}