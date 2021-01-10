//display date 
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

  
$(".btn").on("click", function () {
       
    var input = $(this).siblings(".todo").val(); 
    var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, input);
    })
    
    $("#8Am .todo").val(localStorage.getItem("8Am"));
    $("#9Am .todo").val(localStorage.getItem("9Am"));
    $("#10Am .todo").val(localStorage.getItem("10Am"));
    $("#11Am .todo").val(localStorage.getItem("11Am"));
    $("#12Pm .todo").val(localStorage.getItem("12Pm"));
    $("#1Pm .todo").val(localStorage.getItem("1Pm"));
    $("#2Pm .todo").val(localStorage.getItem("2Pm"));
    $("#3Pm .todo").val(localStorage.getItem("3Pm"));
    $("#4Pm .todo").val(localStorage.getItem("4Pm"));
    $("#5Pm .todo").val(localStorage.getItem("5Pm"));
