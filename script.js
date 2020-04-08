$(document).ready(function(event) {

var currentTime = moment().format('dddd MMMM Do YYYY, h:mm a');
var timeIndex = moment().format('HH');



function timeWriting(){
    $("#currentDay").text(currentTime);
}

function tableMaker() {

    var trMaker = $("<tr>");
    var tdMaker = $("<td>");
    var saveBtn = $("<button>");



    for (var i=9; i<18;i++){



        

    //row
        // trMaker
        //     .addClass("row")
        //     

       
    
    // hours
        // tdMaker
        //     .addClass("time-block hour")
        //     .text()
    // description
        // tdMaker
        //     .addClass("description")

    // saveBtn
        // saveBtn
        //     .addClass("saveBtn")
}



timeWriting();

});



    // <header class="jumbotron">
    //   <h1 class="display-3">Work Day Scheduler</h1>
    //   <p class="lead">A simple calendar app for scheduling your work day</p>
    //   <p id="currentDay" class="lead"></p>
    // </header>
    // <div class="container">
    //   <!-- Timeblocks go here -->
    // </div> */}


//     <tr>
//     <td>Interstellar</td>
//     <td>2014</td>
//     <td>Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow</td>
//   </tr>