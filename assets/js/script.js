var timeDisplayEl = $('#time-display');
var requestUrl = 'https://api.covid19api.com/summary';
var searchFormEl = document.querySelector('#search-form');
var submitFormEl = document.querySelector('#submit-form');
var regionalEl = document.querySelector('#regional');
var country4Vax = "";
var globalIP ="";
var globalConfirmedVax =""
var countryCode=""
var continent_name=""
var postalCode = ""
var region = ""
var regionCode = ""
var newConfirmed =""
var newDeaths = ""
var totalDeaths = ""
var newRecovered = ""
var regionActive = ""
var regionConfirmed = ""
var regionDeaths =""
var mapBox = document.querySelector('#map');
var userLatitude = "";
var userLongitude = "";
var start = ""
var end = [0,0]; 
var map = ""
var geoson = ""
var target = ""
var repoList = document.querySelector('ul');

//Information from GeoIP
var countryCodeEl = document.querySelector('#country-code');
var continent_nameEl = document.querySelector('#continent-name');
var postalCodeEl = document.querySelector('#postal-code');
var regionEl = document.querySelector('#region');
var regionCodeEl = document.querySelector('#region-code');

//Information from Global Covid Data
var newConfirmedEl = document.querySelector('#new-confirmed');
var newDeathsEl = document.querySelector('#new-deaths');
var totalDeathsEl = document.querySelector('#total-deaths');
var newRecoveredEl = document.querySelector('#new-recovered');

//Information from Regional Covid Data
var regionActiveEl = document.querySelector('#region-active');
var regionConfirmedEl = document.querySelector('#region-confirmed');
var regionDeathsEl = document.querySelector('#region-deaths');

var vaccineInfoEl = document.querySelector('#currentVaccineDistributed');


//Was working, now not working for some reason, believe the site changed
function getVaccineData(){
  console.log(country4Vax);
  fetch( 'https://covid-api.mmediagroup.fr/v1/vaccines?country=' + country4Vax)
  .then(function (response) {
  return response.json();
  })
  .then(function (data) {
  // console.log('Fetch Response \n-------------');
  console.log(data);
  globalConfirmedVax = data.World.All.administered.toLocaleString();
  vaccineInfoEl.append(globalConfirmedVax);


  //Are doing stuff with the data here. So. Getting Global Vax data.
  
  console.log(globalConfirmedVax);
  })
  .catch(function (err) {
  console.log('error: ' + err);
  });
}
function setCovidGlobalData(){
  newConfirmedEl.append(newConfirmed);
  newDeathsEl.append(newDeaths);
  newRecoveredEl.append(newRecovered);
  totalDeathsEl.append(totalDeaths);
}

function getCovidGlobal(){
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // created variables for the array of data in the global Covid object
    newConfirmed = data.Global.NewConfirmed.toLocaleString();
    newDeaths = data.Global.NewDeaths.toLocaleString();
    totalDeaths = data.Global.TotalDeaths.toLocaleString();
    newRecovered = data.Global.NewRecovered.toLocaleString();
    globalConfirmedCovid = data.Global.TotalConfirmed
    //globalConfirmedCovid = TEMPglobalConfirmedCovid.toLocaleString();

    
    console.log(globalConfirmedCovid);
    // calling the displayCovidGlobal function
    displayCovidGlobal(globalConfirmedCovid.toLocaleString());
// newConfirmed = parseInt(newConfirmed)
// console.log("New confirmed: " + newConfirmed);

    // displayNewConfirmed(newConfirmed.toLocaleString());
    // displayNewDeaths(newDeaths.toLocaleString());
    // displayTotalDeaths(totalDeaths.toLocaleString());
    // displayNewRecovered(newRecovered.toLocaleString());


    setCovidGlobalData();
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
}

function displayNewConfirmed(confirmedCases) {
var covidGlobalConfirmed1 = document.querySelector('#get-new-confirmed');
covidGlobalConfirmed1.append(confirmedCases);
}

function displayNewDeaths(confirmedCases) {
var covidGlobalConfirmed1 = document.querySelector('#get-new-deaths');
covidGlobalConfirmed1.append(confirmedCases);
}
function displayTotalDeaths(confirmedCases) {
var covidGlobalConfirmed1 = document.querySelector('#get-total-deaths');
covidGlobalConfirmed1.append(confirmedCases);
}

function displayTotalRecovered(confirmedCases) {
var covidGlobalConfirmed1 = document.querySelector('#get-total-recovered');
covidGlobalConfirmed1.append(confirmedCases);
}

function displayRestOfGlobal(){

}
 // displaying covid data
function displayCovidGlobal(confirmedCases) {
var covidGlobalConfirmed1 = document.querySelector('#get-covid-data');
covidGlobalConfirmed1.append(confirmedCases);
}
// getCovidGlobal();
// // gets the New Confirmed cases
// function getNewConfirmed(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     // calling the displayNewConfimed function
//     displayNewConfirmed(newConfirmed);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }
//  // displaying new confirmed cases
// function displayNewConfirmed(newConfirmedCases) {
// var covidNewConfirmed = document.querySelector('#get-new-covid-data');
// covidNewConfirmed.append(newConfirmedCases);
// }
// getNewConfirmed();
// // getting data on new covid deaths
// function getNewDeaths(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     console.log(newDeaths);
//     // calling the displayNewDeaths function
//     displayNewDeaths(newDeaths);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }
//  // displaying new covid death data
// function displayNewDeaths(newConfirmedDeaths) {
// var covidNewDeaths = document.querySelector('#get-covid-death-data');
// covidNewDeaths.append(newConfirmedDeaths);
// }
// getNewDeaths();
// // getting total global covid death data
// function getTotalDeaths(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     console.log(newDeaths);
//     console.log(totalDeaths);
//     // calling the displayTotalDeaths function
//     displayTotalDeaths(totalDeaths);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }
//  // displaying total global covid death data
// function displayTotalDeaths(totalGlobalDeaths) {
// var covidTotalDeaths = document.querySelector('#get-global-death-data');
// covidTotalDeaths.append(totalGlobalDeaths);
// }
// getTotalDeaths();
// // getting total recovered from covid data
// function getTotalRecovered(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     console.log(newDeaths);
//     console.log(totalDeaths);
//     console.log(newRecovered);
//     // calling the displayTotalRecovered function
//     displayTotalRecovered(newRecovered);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }
//  // displaying total recovered from covid
// function displayTotalRecovered(totalGlobalRecovered) {
// var covidTotalRecovered = document.querySelector('#get-global-recovery-data');
// covidTotalRecovered.append(totalGlobalRecovered);
// }
// getTotalRecovered();

// function getCovidGlobal(){
//   //requestURL is defined in a variable up top
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newRecovered = data.Global.NewRecovered;
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;


//     //Just offloading the set to helper class so we could use it elsewhere
    
    
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     setCovidGlobalData();
//     // calling the displayCovidGlobal function
//     displayCovidGlobal(globalConfirmedCovid);
    
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }

// <<<<<<< makingitlookgood
// getCovidGlobal();

// // gets the New Confirmed cases
// function getNewConfirmed(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     // calling the displayNewConfimed function
//     displayNewConfirmed(newConfirmed.toLocaleString());
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }

//  // displaying new confirmed cases
// function displayNewConfirmed(newConfirmedCases) {
// var covidNewConfirmed = document.querySelector('#get-new-covid-data');
// covidNewConfirmed.append(newConfirmedCases);
// }

// getNewConfirmed();

// // getting data on new covid deaths
// function getNewDeaths(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     console.log(newDeaths);
//     // calling the displayNewDeaths function
//     displayNewDeaths(newDeaths.toLocaleString());
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }

//  // displaying new covid death data
// function displayNewDeaths(newConfirmedDeaths) {
// var covidNewDeaths = document.querySelector('#get-covid-death-data');
// covidNewDeaths.append(newConfirmedDeaths);
// }

// getNewDeaths();

// // getting total global covid death data
// function getTotalDeaths(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     console.log(newDeaths);
//     console.log(totalDeaths);
//     // calling the displayTotalDeaths function
//     displayTotalDeaths(totalDeaths.toLocaleString());
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }

//  // displaying total global covid death data
// function displayTotalDeaths(totalGlobalDeaths) {
// var covidTotalDeaths = document.querySelector('#get-global-death-data');
// covidTotalDeaths.append(totalGlobalDeaths);
// }

// getTotalDeaths();

// // getting total recovered from covid data
// function getTotalRecovered(){
//   fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     newConfirmed = data.Global.NewConfirmed;
//     newDeaths = data.Global.NewDeaths;
//     totalDeaths = data.Global.TotalDeaths;
//     newRecovered = data.Global.NewRecovered;
//     globalConfirmedCovid = data.Global.TotalConfirmed;
//     console.log(globalConfirmedCovid);
//     console.log(newConfirmed);
//     console.log(newDeaths);
//     console.log(totalDeaths);
//     console.log(newRecovered);
//     // calling the displayTotalRecovered function
//     displayTotalRecovered(newRecovered.toLocaleString());
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });
// }

//  // displaying total recovered from covid
// function displayTotalRecovered(totalGlobalRecovered) {
// var covidTotalRecovered = document.querySelector('#get-global-recovery-data');
// covidTotalRecovered.append(totalGlobalRecovered);
// =======
//  // displaying covid data
// function displayCovidGlobal(confirmedCases) {
// var covidGlobalConfirmed1 = document.querySelector('#get-covid-data');
// covidGlobalConfirmed1.append(confirmedCases);
// >>>>>>> main

 //would like to offload the GEOIP stuff called at the beginning of init here but having some syntax problems


function covidData(){
  // displays data from Covid-19 API in console
//different search lines in comment here
//'https://api.covid19api.com/total/dayone/country/' + globalCountry + '/status/confirmed'
//'https://api.covid19api.com/live/country/' + globalCountry + '/status/confirmed'
//
  fetch('https://api.covid19api.com/live/country/' + globalCountry + '/status/confirmed')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    // console.log('Fetch Response \n-------------');
    console.log(data);
    
    //must do some logic to get the right region
    console.log("data length: " + data.length);
    var TEMPObjectDate = data[data.length - 1 ].Date ; 

    for ( i = (data.length - 1 ) ; i > 0 ; i--){

      console.log("For Loop Check");

      if (data[i].Province === region){
        localStorage.setItem("The Unique Local Storage item is a Local Region", region);
        console.log("Region is : " +  region)
        regionActive = data[i].Active.toLocaleString();
        regionConfirmed = data[i].Confirmed.toLocaleString();
        regionDeaths = data[i].Deaths.toLocaleString();
        regionActiveEl.append(regionActive);
        regionConfirmedEl.append(regionConfirmed);
        regionDeathsEl.append(regionDeaths);
        console.log("Region Deaths: " + regionDeaths);
        console.log("Region Active: " + regionActive);
        console.log("Region Confirmed : " + regionConfirmed);


        return;

      }
    
      // var TEMPMomentDate = moment().format('l');
      // TEMPMomentDate = TEMPMomentDate.replace(/\//g, '-');
          
      // var TEMPObjectDate = data[i].Date.substring(0, 10);
      // console.log("TEMP Object Date: " + TEMPObjectDate);
      // var newObjectDate = TEMPObjectDate.split("-");
      // TEMPObjectDate = newObjectDate[1] + "-" + newObjectDate[2] +"-"+ newObjectDate[0];
      // TEMPObjectDate = TEMPObjectDate.substring(1);
      // console.log("TEMPObjectDate " + TEMPObjectDate);
      // console.log("TEMPMomentDate " + TEMPMomentDate);
      // console.log("i is: " + i);


      // in this loop we are gethering all regional info for the date
    if (TEMPObjectDate === data[i].Date){
      console.log("Region is " + data[i].Province);
      var newUserLongitude = data[i].Lon;
      var newUserLatitude = data[i].Lat;
      var newRegionalProvince = data[i].Province;
      console.log("newRegion : "+ newRegionalProvince);
      console.log("userLong: " + newUserLongitude);
      console.log("userLat: " + newUserLatitude);
      var listItem = document.createElement('li');

      listItem.textContent = "Province: " + data[i].Province + " Deaths: " +data[i].Deaths + " Active: " + data[i].Active + " Recovered: " + data[i].Recovered ;
      repoList.append(listItem);

      
    }
      
    }
    
       console.log("We are outside of the for i")
       console.log["i is: " + i];


        console.log("Data.length : " + data.length);
  
        console.log("Out of Regional Loop")
      console.log(data[0].Confirmed);
      //Are doing stuff with the data here. So.
      var TEMPcovidGlobalConfirmed=data[0].Confirmed;
      covidGlobalConfirmed.text(TEMPcovidGlobalConfirmed);

      return covidGlobalConfirmed.json();
      
      //appendData(data);
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
}


// handle displaying the time
function displayTime() {
  // The way we want the date to look
  // To add text add brackets
  // momentjs.com 
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
//helper class for displayTime
  setInterval(displayTime, 1000);
}

setInterval(displayTime, 1000);




function init() {
//var getIP=  fetch(" https://www.cloudflare.com/cdn-cgi/trace").then(res => res.text()).then(data => console.log(data))
//We can use this set function incase we get updated information some other way, like a search bar or drop down
function setRegionInfo(){
  countryCodeEl.append(countryCode);
  continent_nameEl.append(continent_name);
  postalCodeEl.append(postalCode);
  regionEl.append(region);
  regionCodeEl.append(regionCode);
}

function json(url) {
return fetch(url).then(res => res.json());
}

let apiKey = '9692d1c3f5905c16f6c3847aabe964849cafe1836e79a8d817edcd25';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data)

    globalIP = data.ip
    //getting Lat and Long for Map
    userLatitude = data.latitude.toFixed(2);
            userLongitude = data.longitude.toFixed(2);
            start = [userLongitude, userLatitude];
            end = [userLongitude, userLatitude];
            createMap();
            target = []
            flyMap();
            createMarker();
            
            console.log("userLong: " + userLongitude);
            console.log("userLat: " + userLatitude);
    countryCode = data.country_code;
    continent_name = data.continent_name;
    postalCode = data.postal;
    region = data.region;
    console.log("Region is: " + region);
    regionCode = data.region_code;
    //will use country4Vax in the Vaccine call
    country4Vax = data.country_name;
    getVaccineData();
    setRegionInfo();
    console.log("country4vax: " + country4Vax);
    getCovidGlobal();
    //Getting Covid Data for country
    var TEMPCountryName = data.country_name;
    //Converting country name so Covid will accept it, replace spaces with dashes and lower case
    TEMPCountryName = TEMPCountryName.replace(/\s+/g, '-');
    globalCountry = TEMPCountryName.toLowerCase();
    console.log("globalCountry: " + globalCountry);

    //Now we can call the Covid protocol using this information
    covidData();
    return;
  });

  
function flyMap(){
  var isAtStart = true;

  // depending on whether we're currently at point a or b, aim for
  // point a or b
  var target = isAtStart ? end : start;

  // and now we're at the opposite point
  isAtStart = !isAtStart;
  console.log("Lon and Lat Target is: " + target);
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
  center: [userLongitude, userLatitude],
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


    //str = str.replace(/\s+/g, '-');
    // console.log("Global IP: " +globalIP);
    // console.log(data.ip);
    // console.log(data.city);
    // console.log(data.country_code);
    
    // so many more properties
    
    return;
};

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

init();
