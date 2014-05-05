
$(document).keydown(function(event) {
    console.log(event);
    console.log($(window).width())
    if (event.which == 39) {
        $('li:first-child').animate({"margin-left": $(window).width()}, 2000);
    }
    else if (event.which == 37) {
        //$('li:first-child').animate({"margin-left": -5000}, 2000);
        $('li:first-child').animate({"margin-left": -$(window).width()}, 2000);
    }
});

$(document).ready(function() {
    $('body').append('<p>I\'m a paragraph!</p>');
    /*
    $(document).addEventListener('keydown', function(event) {
        if(event.keyCode == 37) {
            alert('Left');
        }
    });*/
});
