jQuery(document).ready(function($) {
    $(".admin-menu__item").click(function(event) {
        $('.admin-menu__item').removeClass('admin-menu__item--active');
        $('.header-select').removeClass('header-select--visible');
        $(this).addClass('admin-menu__item--active');
        $('.header-select--' + $(this).attr('type')).addClass('header-select--visible');
    });
    $(".admin-menu__item").click(function(event) {
        let select = $('.header-select--' + $(this).attr('type'));
        let list = select.attr('type');
        $(".header-select-list--" + list).find('li').first().click();
    });
});
