var timeDisplayEl = $('#time-display');
// var covidData = document.querySelector('span');
var requestUrl = 'https://api.covid19api.com/summary';
// var currentVaccineDistributedEl = $('#currentVaccineDistributed');
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

// gets global Covid cases
function getCovidGlobal(){
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // created variables for the array of data in the global Covid object
    newConfirmed = data.Global.NewConfirmed;
    newDeaths = data.Global.NewDeaths;
    totalDeaths = data.Global.TotalDeaths;
    newRecovered = data.Global.NewRecovered;
    globalConfirmedCovid = data.Global.TotalConfirmed;
    console.log(globalConfirmedCovid);
    // calling the displayCovidGlobal function
    displayCovidGlobal(globalConfirmedCovid.toLocaleString());
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

getCovidGlobal();

// gets the New Confirmed cases
function getNewConfirmed(){
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    newConfirmed = data.Global.NewConfirmed;
    newDeaths = data.Global.NewDeaths;
    totalDeaths = data.Global.TotalDeaths;
    newRecovered = data.Global.NewRecovered;
    globalConfirmedCovid = data.Global.TotalConfirmed;
    console.log(globalConfirmedCovid);
    console.log(newConfirmed);
    // calling the displayNewConfimed function
    displayNewConfirmed(newConfirmed.toLocaleString());
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
}

 // displaying new confirmed cases
function displayNewConfirmed(newConfirmedCases) {
var covidNewConfirmed = document.querySelector('#get-new-covid-data');
covidNewConfirmed.append(newConfirmedCases);
}

getNewConfirmed();

// getting data on new covid deaths
function getNewDeaths(){
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    newConfirmed = data.Global.NewConfirmed;
    newDeaths = data.Global.NewDeaths;
    totalDeaths = data.Global.TotalDeaths;
    newRecovered = data.Global.NewRecovered;
    globalConfirmedCovid = data.Global.TotalConfirmed;
    console.log(globalConfirmedCovid);
    console.log(newConfirmed);
    console.log(newDeaths);
    // calling the displayNewDeaths function
    displayNewDeaths(newDeaths.toLocaleString());
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
}

 // displaying new covid death data
function displayNewDeaths(newConfirmedDeaths) {
var covidNewDeaths = document.querySelector('#get-covid-death-data');
covidNewDeaths.append(newConfirmedDeaths);
}

getNewDeaths();

// getting total global covid death data
function getTotalDeaths(){
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    newConfirmed = data.Global.NewConfirmed;
    newDeaths = data.Global.NewDeaths;
    totalDeaths = data.Global.TotalDeaths;
    newRecovered = data.Global.NewRecovered;
    globalConfirmedCovid = data.Global.TotalConfirmed;
    console.log(globalConfirmedCovid);
    console.log(newConfirmed);
    console.log(newDeaths);
    console.log(totalDeaths);
    // calling the displayTotalDeaths function
    displayTotalDeaths(totalDeaths.toLocaleString());
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
}

 // displaying total global covid death data
function displayTotalDeaths(totalGlobalDeaths) {
var covidTotalDeaths = document.querySelector('#get-global-death-data');
covidTotalDeaths.append(totalGlobalDeaths);
}

getTotalDeaths();

// getting total recovered from covid data
function getTotalRecovered(){
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    newConfirmed = data.Global.NewConfirmed;
    newDeaths = data.Global.NewDeaths;
    totalDeaths = data.Global.TotalDeaths;
    newRecovered = data.Global.NewRecovered;
    globalConfirmedCovid = data.Global.TotalConfirmed;
    console.log(globalConfirmedCovid);
    console.log(newConfirmed);
    console.log(newDeaths);
    console.log(totalDeaths);
    console.log(newRecovered);
    // calling the displayTotalRecovered function
    displayTotalRecovered(newRecovered.toLocaleString());
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
}

 // displaying total recovered from covid
function displayTotalRecovered(totalGlobalRecovered) {
var covidTotalRecovered = document.querySelector('#get-global-recovery-data');
covidTotalRecovered.append(totalGlobalRecovered);
}

getTotalRecovered();



 //would like to offload the GEOIP stuff called at the beginning of init here but having some syntax problems
function getGeoIP(){
  
}

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

// <<<<<<< Map_Feature_cont
//helper class for displayTime
setInterval(displayTime, 1000);

//logic we call when we load the page. We can use logic calls elsewhere like buttons and dropdowns.
// =======
}

setInterval(displayTime, 1000);



// >>>>>>> main
function init() {

//var getIP=  fetch(" https://www.cloudflare.com/cdn-cgi/trace").then(res => res.text()).then(data => console.log(data))



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
    console.log("country4vax: " + country4Vax);

    //Getting Covid Data for country
    //Converting country name so Covid will accept it, replace spaces with dashes and lower case
    var TEMPCountryName = data.country_name;
    
    

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

  

  // }}
  




// document.querySelector("#search-form").addEventListener("submit", function(event) {
// event.preventDefault();
