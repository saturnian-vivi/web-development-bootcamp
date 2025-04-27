// $("h1").css("color", "red");

$("h1").addClass("big-title");

// $("button").eq(3).text("Don't Click Me");

$(document).keydown(function(event) {
    $("h1").text(event.key);
})

$("button").on("click", function() {
    $("h1").slideToggle();
});

// $("button").on("mouseover", function() {
//     $("h1").slideToggle();
// });