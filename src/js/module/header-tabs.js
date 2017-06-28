jQuery(document).ready(function($) {
    $(".header-tabs__item").click(function(event) {
        $('.header-tabs__item').removeClass('header-tabs__item--active');
        $(this).addClass('header-tabs__item--active');
        $(".content").removeClass('content--active');
        $(".content--" + $(this).attr('code')).addClass('content--active');
    });
});
