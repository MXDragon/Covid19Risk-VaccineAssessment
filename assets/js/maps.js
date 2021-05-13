var mapBox = document.querySelector('#map');
var userLatitude = "";
var userLongitude = "";
var start = ""
var end = [0,0]; 
var map = ""
var geoson = ""

function geoIP(){
    function json(url) {
        return fetch(url).then(res => res.json());
        }
            
        let apiKey = '9692d1c3f5905c16f6c3847aabe964849cafe1836e79a8d817edcd25';
        json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
            console.log(data)
        
            //getting Lat and Long for Map
            userLatitude = data.latitude.toFixed(2);
            userLongitude = data.longitude.toFixed(2);
            start = [userLatitude, userLongitude];
            createMap();
            flyMap();
            createMarker();
            
            console.log("userLong: " + userLongitude);
            console.log("userLat: " + userLatitude);
        })

}

function flyMap(){
    var isAtStart = true;
 
    // depending on whether we're currently at point a or b, aim for
    // point a or b
    var target = isAtStart ? end : start;
 
    // and now we're at the opposite point
    isAtStart = !isAtStart;
    console.log("Lat and Lon Target is: " + target);
    console.log("start is : " + start);
    console.log("end is: " + end );

    map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        
        center: target,
        zoom: 9,
        bearing: 0,
         
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
         
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
        return t;
        },
         
        // this animation is considered essential with respect to prefers-reduced-motion
        essential: true
        });
}

function createMap(){
    console.log("CMuserLong: " + userLongitude);
    console.log("CMuserLat: " + userLatitude);
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVudHpicnkiLCJhIjoiY2tvZ2o5cm5iMGZrcTJvbngwZnpzYW9yMyJ9.lFzRDHzMnkWAhcUuY-6POw';
    map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: end,
    });
    geojson = {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'properties': {
        'message': 'Foo',
        'iconSize': [60, 60]
        },
        'geometry': {
        'type': 'Point',
        'coordinates': [userLongitude, userLatitude]
        }}
        ]
    };
}

function createMarker(){
    // Add markers to the map.
    geojson.features.forEach(function (marker) {
        // Create a DOM element for each marker.
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
        'url(https://img.icons8.com/emoji/96/000000/biohazard-emoji.png)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';
        el.style.backgroundSize = '100%';
         
        el.addEventListener('click', function () {
        window.alert(marker.properties.message);
        });
         
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        });
}

function init(){
    geoIP();
   
};



init();
