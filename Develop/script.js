var textInput = document.querySelector("#textSpace");
var textInputs = document.getElementsByClassName('areaText');
var saveButton = document.querySelector(".saveBtn");
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:m A"));

var currentHour = moment().hour();

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".areaText").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);

    if (!text);
    return;
});

for (i = 0; i < 10; i++) {
    $(".container")
    .children()
    .eq(i)
    .children()
    .eq(1)
    .val(localStorage.getItem(i + 8));

    if (currentHour < i + 8) {
        $(".container").children().eq(i).children().eq(1).addClass("future");

    }  else if (currentHour == i + 8)
    $(".container").children().eq(i).children().eq(1).addClass("present");

    else {
        $(".container").children().eq(i).children().eq(1).addClass("past");
    }
}