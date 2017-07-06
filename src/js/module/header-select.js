jQuery(document).ready(function($) {
    let visible = 'header-select-list--visible';
    //show current
    $("body").on('click', '.header-select', function(event) {
        let target = $('.header-select-list--' + $(this).attr('type'));
        if(target.hasClass(visible)){
            $('.header-select-list').removeClass(visible);
        }else{
            $('.header-select-list').removeClass(visible);
            event.preventDefault();
            event.stopPropagation();
            $(target).addClass(visible);
        }
    });
    //hide all
    $(window).click(function(event) {
        $('.header-select-list').removeClass(visible);
    });
    //select option
    $("body").on('click', '.header-select-list__item', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('.header-select-list').removeClass(visible);
        // $(".table").removeClass('table--active');
        // $(".table--" + $(this).attr('type')).addClass('table--active');
        Dictionary.init($(this).attr('dictionary')).load();
    });
    //select first view
    $(".admin-menu__item--active").click();
});
