jQuery(document).ready(function($) {
    $(".header-button").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(".header-settings").addClass('header-settings--visible');
    });

    $(window).click(function(e) {
        $(".header-settings").removeClass('header-settings--visible');
    });

    $(window).keyup(function(e) {
        if(e.keyCode == 27) //escape
            $(".header-settings").removeClass('header-settings--visible');
    });

    $(".header-settings").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $(".header-settings__item").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        alert($(this).text());
        $(".header-settings").removeClass('header-settings--visible');
    });
});
