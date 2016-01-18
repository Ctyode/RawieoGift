$("ul li").click(function() {

    var tab = $(this).index();
    var position = 273 * tab;

    if($(this).hasClass('slider')) {
        return;
    }

    $(".slider").css({
        left: position + "px"
    });
});