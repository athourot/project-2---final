var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 41.8741, lng: -87.6285}, 
    center: {lat: 41.8784, lng: -87.6283},
    zoom: 15
  });

  var jones = new google.maps.Marker({
    position: { lat: 41.8733, lng: -87.6280},
    map: map
  });

  var pool2 = new google.maps.Marker({
    position: { lat: 41.9028, lng: -87.6225 },
    map: map
  });

  var distPoints = [
    { lat: 41.87338960947978, lng: -87.627936194527 },
    { lat: 41.873204033696794, lng: -87.62430537591321 },
    { lat: 41.900847797299235, lng: -87.62426246057976 },
    { lat: 41.9033341811596, lng: -87.62297728442456 },
  ];

  var dist = new google.maps.Polyline({
    path: distPoints,
    geodesic: true,
    strokeColor: "#FE5F55",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  dist.setMap(map);

}

window.initMap = initMap;
