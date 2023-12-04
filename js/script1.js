var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    //center: {lat: 41.8741, lng: -87.6285}, 
    center: {lat: 41.8784, lng: -87.6283},
    zoom: 15
  });

  var jones = new google.maps.Marker({
    position: { lat: 41.8732, lng: -87.6279},
    map: map
  });

  var oakstreet = new google.maps.Marker({
    position: { lat: 41.90298747682481, lng: -87.62247266526667 },
    map: map
  });

  var distPoints = [
    { lat: 41.8732, lng: -87.6279 },
    { lat: 41.87336489052415, lng: -87.62415281746075 },
    { lat: 41.90298747682481, lng: -87.62247266526667 },
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
