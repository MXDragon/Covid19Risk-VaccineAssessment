var timeDisplayEl = $('#time-display');
// var covidData = document.querySelector('span');
var requestUrl = 'https://api.covid19api.com/summary';
// var currentVaccineDistributedEl = $('#currentVaccineDistributed');
var searchFormEl = document.querySelector('#search-form');

var submitFormEl = document.querySelector('#submit-form');
var country4Vax = "";
var globalIP ="";
var globalConfirmedVax =""

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

function getCovidGlobal(){
  fetch(requestUrl)
  .then(function (response) {
   return response.json();
 })
 .then(function (data) {
   // console.log('Fetch Response \n-------------');
   console.log(data);
   
   //Are doing stuff with the data here. So. Getting Global Vax data.
   globalConfirmedCovid = data.TotalConfirmed;
   console.log(globalConfirmedCovid);
 
  })
 .catch(function (err) {
   console.log('error: ' + err);
 });
 }

 getCovidGlobal();

// displays data from Covid-19 API in console
// function globalCovidData () {
  // fetch(requestUrl)
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
    // console.log('Fetch Response \n-------------');
  //   console.log(data);
  //   appendData(data);
  // })
  // .catch(function (err) {
  //   console.log('error: ' + err);
  // });

// globalCovidData = document.querySelector('#get-covid-data');

  // function appendData(data) {
    // covidGlobalConfirmed = document.querySelector('#get-covid-data');
    // for (var i = 0; i < data.length; i++) {
    //   var div = document.createElement("div");
    //   div.innerHTML = data[i].totalConfirmed + ' '
    //   covidData.appendChild(div);
    // }
  



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
}


setInterval(displayTime, 1000);

function init() {

  //var getIP=  fetch(" https://www.cloudflare.com/cdn-cgi/trace").then(res => res.text()).then(data => console.log(data))

  function json(url) {
  return fetch(url).then(res => res.json());
  }

  let apiKey = '9692d1c3f5905c16f6c3847aabe964849cafe1836e79a8d817edcd25';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data)

    globalIP = data.ip

    //will use country4Vax in the Vaccine call
    country4Vax = data.country_name;

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
