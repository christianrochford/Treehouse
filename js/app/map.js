// Google Map
var styles = [
	{
    "featureType": "transit.station.rail",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#e97e24" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e97e24" },
      { "saturation": 0 },
      { "lightness": 28 }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#e97e24" },
      { "saturation": 100 },
      { "lightness": -100 }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#cccccc" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "color": "#cccccc" },
      { "lightness": -10 }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#000000" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e97e24" },
      { "saturation": 0 },
      { "lightness": 28 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "color": "#e97e24" },
      { "saturation": 0 },
      { "lightness": 28 }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      { "saturation": -100 }
    ]
  },{
    "featureType": "transit.station.bus",
    "elementType": "labels.text.fill",
    "stylers": [
      { "saturation": -100 }
    ]
  },{
    "featureType": "transit.station.bus",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.transit",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];

var map;
var dublin = new google.maps.LatLng(53.336985,-6.249164);

function initialize() {
  var mapOptions = {
    center: dublin,
    zoom: 14,
    zoomControl: false,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles,
    scrollwheel: false,
    draggable: false,
  };
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  //Marker 
  var treehouse = new google.maps.Marker({
    position: dublin,
    map: map,
    icon: '../img/map-logo.png'
  }); 

}

google.maps.event.addDomListener(window, 'load', initialize);

