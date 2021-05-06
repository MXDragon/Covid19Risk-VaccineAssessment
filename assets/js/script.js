var timeDisplayEl = $('#time-display');
var searchFormEl = document.querySelector('#search-form');
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
