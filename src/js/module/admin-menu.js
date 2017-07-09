jQuery(document).ready(function($) {
    $(".admin-menu__item").click(function(event) {
        $('.admin-menu__item').removeClass('admin-menu__item--active');
        $('.header-select').removeClass('header-select--visible');
        $(this).addClass('admin-menu__item--active');
        $('.header-select--' + $(this).attr('type')).addClass('header-select--visible');
    });
    $(".admin-menu__item").click(function(event) {
        let content = $(this).attr('content');
        $(".content").removeClass('content--active');
        $('.content--' + content).addClass('content--active');

        if(content == 'curve'){
            $(".header-button--edit").show();
        }else{
            $(".header-button--edit").hide();
        }
    });
    $(".admin-menu__item").click(function(event) {
        let select = $('.header-select--' + $(this).attr('type'));
        let list = select.attr('type');
        $(".popup--" + list).find('.popup-list__item').first().click();
    });
});
