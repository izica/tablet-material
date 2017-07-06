jQuery(document).ready(function($) {
    let visible = 'table-select--visible';
    //show current
    $("body").on('click', '.table-select', function(event) {
        if($(this).hasClass(visible)){
            $('.table-select').removeClass(visible);
        }else{
            $('.table-select').removeClass(visible);
            event.preventDefault();
            event.stopPropagation();
            $(this).addClass(visible);
        }
    });
    //hide all
    $(window).click(function(event) {
        $('.table-select').removeClass(visible);
    });
    //select option
    $("body").on('click', '.table-select__item', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parents(".table-select").find('span').text($(this).text());
        $(this).parents(".table-select").removeClass('table-select--empty');
        $('.table-select').removeClass(visible);
    });

});
