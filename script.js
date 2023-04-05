// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
var now = dayjs().format('DD/MM/YYYY');
$('#currentDay').text(now);
console.log(now)

function updateClock () {
  var currentTime = new Date ();
  var currentHour = currentTime.getHours ();
  var currentMinute = currentTime.getMinutes ();
  var currentSeconds = currentTime.getSeconds ();

  currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  var timeOfDay = ( currentHour < 12 ) ? "AM" : "PM";
  currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
  currentHour = (currentHour ==  0) ? 12 : currentHour;
  var currentTimeString = currentHour + ":" + currentMinute + ":" + currentSeconds + " " + timeOfDay;
  $("#currentDay").html(currentTimeString);
}
$(document).ready(function() {
  setInterval('updateClock()', 1000);
});


