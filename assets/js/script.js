var timeDisplayEl = $('#time-display');
// var getCovidData = $('#getCovidData');
// var getVaccineData = $('#getVaccineData');
var searchFormEl = document.querySelector('#search-form');
var covidGlobalEl = document.querySelector('#covid-global');

var submitFormEl = document.querySelector('#submit-form');
// handle displaying the time
function displayTime() {
  // The way we want the date to look
  // To add text add brackets
  // momentjs.com 
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

function getCovidData() {
  var results = fetch("https://api.covid19api.com/summary")
  // console.log(results)
  .then(response => response.json())
  .then(summary => showSummary(summary.results));
}

getCovidData();

function init() {

var ip=  fetch(" https://www.cloudflare.com/cdn-cgi/trace").then(res => res.text()).then(data => console.log(data))


fetch("http://api.ipapi.com/" + ip + "?access_key=eee64595bb8ff68b058ee670d467d2e3")

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}
init()