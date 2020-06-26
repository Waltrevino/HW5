$(document).ready(function () {
    // Convert Moment time into variable
    var currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);

    function updateHour() {
        // Set interval to 100 milliseconds
        var interval = setInterval(function () {
            var currentTime = moment().hours();
            $(".hour-block").each(function () {
                // Parse each row's id into array 
                var hourBlock = parseInt($(this).attr("id").split("-")[1]);
                // Evaluate whether current block is less than current time and add class, change back ground color, and font color.
                if (hourBlock < currentTime) {
                    $(this).addClass("pasado");
                    $(this).children(".description").css("background-color", "#FE5F55");
                    $(this).children(".description").css("color", "white");
                // Evaluate whether current block is equals to current time and add class, change back ground color.
                } else if (hourBlock === currentTime) {
                    $(this).removeClass("pasado");
                    $(this).addClass("presente");
                    $(this).children(".description").css("background-color", "#9FD356");
                // Remove classes and add futuro to represent future hour blocks, change background color.    
                } else {
                    $(this).removeClass("pasado");
                    $(this).removeClass("presente");
                    $(this).addClass("futuro");
                    $(this).children(".description").css("background-color", "#FCF6B1");
                }
            });
        }, 100);
    }

    $(".saveBtn").on("click", function () {
        // Store hour block information and store in local storage.
        var hourBlockDescription = $(this).siblings(".description").val();
        var hourBlockTime = $(this).parent().attr("id");
        localStorage.setItem(hourBlockTime, hourBlockDescription);
    });

    updateHour();

    // Retrive each of the time blocks textarea value from local storage.
    $("#hora-6 .description").val(localStorage.getItem("hora-6"));
    $("#hora-7 .description").val(localStorage.getItem("hora-7"));
    $("#hora-8 .description").val(localStorage.getItem("hora-8"));
    $("#hora-9 .description").val(localStorage.getItem("hora-9"));
    $("#hora-10 .description").val(localStorage.getItem("hora-10"));
    $("#hora-11 .description").val(localStorage.getItem("hora-11"));
    $("#hora-12 .description").val(localStorage.getItem("hora-12"));
    $("#hora-13 .description").val(localStorage.getItem("hora-13"));
    $("#hora-14 .description").val(localStorage.getItem("hora-14"));
    $("#hora-15 .description").val(localStorage.getItem("hora-15"));
    $("#hora-16 .description").val(localStorage.getItem("hora-16"));
    $("#hora-17 .description").val(localStorage.getItem("hora-17"));
    $("#hora-18 .description").val(localStorage.getItem("hora-18"));
    $("#hora-19 .description").val(localStorage.getItem("hora-19"));
    $("#hora-20 .description").val(localStorage.getItem("hora-20"));
    $("#hora-21 .description").val(localStorage.getItem("hora-21"));
    $("#hora-22 .description").val(localStorage.getItem("hora-22"));
    $("#hora-23 .description").val(localStorage.getItem("hora-23"));
    $("#hora-24 .description").val(localStorage.getItem("hora-24"));
});
