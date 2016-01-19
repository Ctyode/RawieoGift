$("ul li").click(function() {

    var tab = $(this).index();
    var position = 273.2 * tab;

    if($(this).hasClass('slider')) {
        return;
    }

    $(".slider").css({
        left: position + "px"
    });

    $('li').removeClass('active');
    $(this).addClass('active');
    $(this).find('li').addClass('active');
});