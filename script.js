// creates the date and time for the header in the current day id
function updateClock (){
  var now = dayjs().format('MMM D, YYYY h:mm:ss A');
$('#currentDay').text(now);
}
// allows the seconds to be updated every second
$(document).ready(function() {
  setInterval('updateClock()', 1000);
});

// function to compare the class with the hour and assigns a new class
$(document).ready(function() {
function checkHour() {
  // compares current time to hour
  var currentHour = moment().hour();
// compares the class number, in this case of "9" to the current hour 
  $(".9").each(function() {
    // if current hour is greater than current class, it assigns it a "past" class
    if (9 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    // if current hour is equal than current class, it assigns it a "present" class
    else if (9 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    // if neither of the above apply then it assigns a future class
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".10").each(function() {
    if (10 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (10 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".11").each(function() {
    if (11 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (11 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".12").each(function() {
    if (12 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (12 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".13").each(function() {
    if (13 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (13 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".14").each(function() {
    if (14 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (14 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".15").each(function() {
    if (9 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (15 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".15").each(function() {
    if (15 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (15 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".16").each(function() {
    if (16 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (16 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
// steps are repeated from comment on line 15, 24, & 30
  $(".17").each(function() {
    if (17 < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if (17 === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
} checkHour();
// creates a click function and links it to the saveBtn class in html
$(".saveBtn").on("click", function (event) {
  // prevents the default from replacing the saved text
  event.preventDefault();
  // variables for the time slot and text to be assigned together to save inputed items to the task class
  var timeSlot = $(this).parent().attr("id");
  var textSlot = $(this).siblings(".task").val();
  // saves the inputed items to the local storage
  localStorage.setItem(timeSlot, textSlot);
})
})
// creates pulls from the storage when the tasks are saved and assigns them to their respected hour slots
$("#hour-9 .task").val(localStorage.getItem("hour-9"));
$("#hour-10 .task").val(localStorage.getItem("hour-10"));
$("#hour-11 .task").val(localStorage.getItem("hour-12"));
$("#hour-1 .task").val(localStorage.getItem("hour-1"));
$("#hour-2 .task").val(localStorage.getItem("hour-2"));
$("#hour-3 .task").val(localStorage.getItem("hour-3"));
$("#hour-4 .task").val(localStorage.getItem("hour-4"));
$("#hour-5 .task").val(localStorage.getItem("hour-5"));
