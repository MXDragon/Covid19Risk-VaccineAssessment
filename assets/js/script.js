var timeDisplayEl = $('#time-display');
var requestUrl = 'https://api.covid19api.com/summary';
var searchFormEl = document.querySelector('#search-form');
var submitFormEl = document.querySelector('#submit-form');
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


//Was working, now not working for some reason, believe the site changed
function getVaccineData(){
  fetch( 'https://covid-api.mmediagroup.fr/v1/vaccines?country=' + country4Vax )
  .then(function (response) {
  return response.json();
  })
  .then(function (data) {
  // console.log('Fetch Response \n-------------');
  console.log(data);
  //Are doing stuff with the data here. So. Getting Global Vax data.
  globalConfirmedVax = data.All.administered;
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
  //requestURL is defined in a variable up top
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    newRecovered = data.Global.NewRecovered;
    newConfirmed = data.Global.NewConfirmed;
    newDeaths = data.Global.NewDeaths;
    totalDeaths = data.Global.TotalDeaths;


    //Just offloading the set to helper class so we could use it elsewhere
    
    
    globalConfirmedCovid = data.Global.TotalConfirmed;
    console.log(globalConfirmedCovid);
    setCovidGlobalData();
    // calling the displayCovidGlobal function
    displayCovidGlobal(globalConfirmedCovid);
    
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
}

 // displaying covid data
function displayCovidGlobal(confirmedCases) {
var covidGlobalConfirmed1 = document.querySelector('#get-covid-data');
covidGlobalConfirmed1.append(confirmedCases);
}
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
      for ( i = data.length ; i < data.length ; i--){
        if (data[i].Province === region){
          regionActive = data[i].Active;
          regionConfirmed = data[i].Confirmed;
          regionDeaths = data[i].Deaths;
          console.log("Region Deaths: " + regionDeaths)
          console.log("Region Active: " + regionActive)
          console.log("Region Confirmed : " + regionConfirmed)
          return;
        }
      }

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
    userLatitude = data.latitude
    userLongitude = data.longitude
    countryCode = data.country_code;
    continent_name = data.continent_name;
    postalCode = data.postal;
    region = data.region;
    regionCode = data.region_code;
    //will use country4Vax in the Vaccine call
    country4Vax = data.country_name;
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
    //str = str.replace(/\s+/g, '-');
    // console.log("Global IP: " +globalIP);
    // console.log(data.ip);
    // console.log(data.city);
    // console.log(data.country_code);
    
    // so many more properties
    getVaccineData();
    return;
};

init();
