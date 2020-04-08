$(document).ready(function (event) {

    var currentTime = moment().format('dddd MMMM Do YYYY, h:mm a');
    

    function timeWriting() {
        $("#currentDay").text(currentTime);
    }


    timeWriting();



    // Making Table
    for (var i = 9; i < 18; i++) {
        var timeIndex = moment().format('HH');
        var trMaker = $("<tr>");
        var tdHour = $("<td>");
        var inputMaker = $("<input>");
        var saveBtn = $("<button>");

        // Row
        trMaker.addClass("row");

        // Hour Col
        tdHour.addClass("hour col-2");
        if (i<12){
            tdHour.text(i + "AM");
        }else if (i ==12){
            tdHour.text(i +"PM");
        }else{
            tdHour.text((i-12) + "PM");
        }
        tdHour.appendTo(trMaker);

        // Note Col
        inputMaker.addClass("description col-9");
        inputMaker.attr("placeholder","Note :");
        inputMaker.attr("id",i);
        if (i<timeIndex){
            inputMaker.addClass("past");
        } else if (i == timeIndex){
            inputMaker.addClass("present");
        } else {
            inputMaker.addClass("future");
        }
        inputMaker.appendTo(trMaker);

        // Btn Col
        saveBtn.addClass("saveBtn col-1");
        saveBtn.attr("value",i);
        saveBtn.text("");
        saveBtn.appendTo(trMaker);
        trMaker.appendTo($(".container"));
    }


    


});
