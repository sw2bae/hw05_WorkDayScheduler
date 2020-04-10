$(document).ready(function (event) {

    var currentTime = moment().format('dddd MMMM Do YYYY, h:mm a');


    // Clearing History for tomorrow 
    function clearHistory() {
        var today = moment().format('DD');
        var yesterday = localStorage.getItem("today");

        if (yesterday !== today) {
            localStorage.clear();
        }
        localStorage.setItem("today", today);
    }

    // Writing Current Time 
    function timeWriting() {
        $("#currentDay").text(currentTime);
    }

    clearHistory();
    timeWriting();

    // Making Table
    for (var i = 9; i < 18; i++) {
        var timeIndex = moment().format('HH');
        var trMaker = $("<tr>");
        var tdHour = $("<td>");
        var inputMaker = $("<input>");
        var saveBtn = $("<button>");
        // Returning SavedItem from localStorage
        var savedItem = localStorage.getItem("'" + i + "'");



        // Row
        trMaker.addClass("row");

        // Hour Col
        tdHour.addClass("col-2 hour");
        if (i < 12) {
            tdHour.text(i + "AM");
        } else if (i == 12) {
            tdHour.text(i + "PM");
        } else {
            tdHour.text((i - 12) + "PM");
        }
        tdHour.appendTo(trMaker);

        // Note Col
        inputMaker.addClass("description col-9");
        inputMaker.attr("id", i);
        // Writing SavedItem from localStorage
        inputMaker.attr("placeholder", savedItem);


        if (i < timeIndex) {
            inputMaker.addClass("past");
        } else if (i == timeIndex) {
            inputMaker.addClass("present");
        } else {
            inputMaker.addClass("future");
        }
        inputMaker.appendTo(trMaker);

        // Btn Col
        saveBtn.addClass("saveBtn col-1");
        saveBtn.attr("value", i);
        saveBtn.text("");
        saveBtn.appendTo(trMaker);
        trMaker.appendTo($(".container"));

    }

    // User Input Saving
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var btnNum = $(this).val();

        var noteId = $("#" + btnNum);
        var userInput = noteId.val();

        localStorage.setItem("'" + btnNum + "'", userInput);        
    });
});
