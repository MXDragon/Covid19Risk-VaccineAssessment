var timeDisplayEl = $('#time-display');
// var covidData = document.querySelector('span');
var requestUrl = 'https://api.covid19api.com/summary';
// var currentVaccineDistributedEl = $('#currentVaccineDistributed');
var searchFormEl = document.querySelector('#search-form');

var submitFormEl = document.querySelector('#submit-form');
var globalIP ="";
var globalCountry = "";
var globalRegion = "";
var globalCity = "";

var covidGlobalConfirmed = document.querySelector('#global-total');

function getCovidData(){
// displays data from Covid-19 API in console
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

    //appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

  // function appendData(data) {
  // var getCovidData = document.getElementById('get-covid-data');
  //   for (var i = 0; i < data.length; i++) {
  //     var div = document.createElement("div");
  //     div.innerHTML = data[i].totalConfirmed + ' '
  //     getCovidData.appendChild(div);
  //   }
  // }
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

  var getIP=  fetch(" https://www.cloudflare.com/cdn-cgi/trace").then(res => res.text()).then(data => console.log(data))

  function json(url) {
  return fetch(url).then(res => res.json());
  }

  let apiKey = '9692d1c3f5905c16f6c3847aabe964849cafe1836e79a8d817edcd25';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    globalIP = data.ip;
    console.log(data);
    var TEMPglobalCountry = data.country_name;
    console.log(TEMPglobalCountry);
    TEMPglobalCountry = TEMPglobalCountry.replace(/\s+/g, '-');
    console.log(TEMPglobalCountry);
    globalCountry = TEMPglobalCountry.toLowerCase();
    console.log(globalCountry);
    // console.log("Global IP: " +globalIP);
    // console.log(data.ip);
    // console.log(data.city);
    globalCity = data.city;
    // console.log(data.country_code);
    // so many more properties
    return;
  } );

  getCovidData();

}

init()


document.querySelector("#search-form").addEventListener("submit", function(event) {
event.preventDefault();
});


