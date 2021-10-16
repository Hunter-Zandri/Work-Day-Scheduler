let currentDate = moment().format("dddd, MMMM Do");
let currentHour = moment().format('YYYY MMMM DD');
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");
let sixPm = $("#18pm");
let sevenPm = $("#19pm");

let hour = moment().hours();
let userInput;
let hourSpan;

let interval = setInterval(function() {
let momentNow = moment();
$('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
        + momentNow.format('dddd')
          .substring(0,3).toUpperCase());
$('#currentDay').html(currentDate + " " + momentNow.format('YYYY MMMM DD'));
}, 100);

function initPage() {

  console.log("Current Hour " + hour);
  let hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  let militaryHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
}
function background () {
      
$(".form-control").each(function () {
  let timeTest = parseInt($(this).attr("id"));
  hour = parseInt(hour);
  console.log(timeTest);
  console.log(hour);

  if (hour > timeTest) {
      $(this).addClass("past");
  } else if (hour < timeTest) {
      $(this).addClass("future");
  } else {
      $(this).addClass("present");
  }
});
}

$(document).ready(function(){
  initPage()
  background()

  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});