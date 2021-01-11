$(document).ready(function () {
//display date 
$("#currentDay").text(moment().format("MMMM Do, YYYY, h:mm a"));

//save inputs
$(".btn").on("click", function () {
       
    var input = $(this).siblings(".todo").val(); 
    var time = $(this).parent().attr("id"); 

    //save input in local storage
    localStorage.setItem(time, input);
})
    
// show the save input 
    $("#8Hour .todo").val(localStorage.getItem("8Hour"));
    $("#9Hour .todo").val(localStorage.getItem("9Hour"));
    $("#10Hour .todo").val(localStorage.getItem("10Hour"));
    $("#11Hour .todo").val(localStorage.getItem("11Hour"));
    $("#12Hour .todo").val(localStorage.getItem("12Hour"));
    $("#1Hour .todo").val(localStorage.getItem("1Hour"));
    $("#2Hour .todo").val(localStorage.getItem("2Hour"));
    $("#3Hour .todo").val(localStorage.getItem("3Hour"));
    $("#4Hour .todo").val(localStorage.getItem("4Hour"));
    $("#5Hour .todo").val(localStorage.getItem("5Hour"));

//show past, present, future schedule color coordinate
function timeList () {
    
    var currentHour = moment().hour();
    

    // loop over time blocks
    $(".time-block").each(function () {
        var scheduleHour = parseInt($(this).attr("id").split("Hour")[1]);
        console.log(scheduleHour, currentHour)

        //use past css (grey) for past hours
        if (scheduleHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        //use present css (red) for current hour
        else if (scheduleHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        //use future css (green) for future hours
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

//rerun function
timeList();
})
