$(document).ready(function (event) {

    var currentTime = moment().format('dddd MMMM Do YYYY, h:mm a');
    var timeIndex = moment().format('HH');

    function timeWriting() {
        $("#currentDay").text(currentTime);
    }


    timeWriting();




    for (var i = 9; i < 18; i++) {

        var trMaker = $("<tr>");

        var tdHour = $("<td>");
        var inputMaker = $("<input>");
        var saveBtn = $("<button>");

        trMaker.addClass("row");

        tdHour.addClass("hour col-2");
        tdHour.text(i);
        tdHour.appendTo(trMaker);

        inputMaker.addClass("description col-9");
        inputMaker.attr("placeholder",i);
        inputMaker.appendTo(trMaker);

        saveBtn.addClass("saveBtn col-1");
        saveBtn.text(i);
        saveBtn.appendTo(trMaker);

        trMaker.appendTo($(".container"));


    }


});
