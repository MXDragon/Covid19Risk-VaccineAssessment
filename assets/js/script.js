var timeDisplayEl = $('#time-display');
// var currentCov19CasesEl = $('#"currentCov19Cases"');
// var currentVaccineDistributedEl = $('#currentVaccineDistributed');
var searchFormEl = document.querySelector('#search-form');

var submitFormEl = document.querySelector('#submit-form');
var globalIP ="";
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
    // console.log("Global IP: " +globalIP);
    // console.log(data.ip);
    // console.log(data.city);
    // console.log(data.country_code);
    // so many more properties
    return;
});


}

init()


document.querySelector("#search-form").addEventListener("submit", function(event) {
event.preventDefault();
});


