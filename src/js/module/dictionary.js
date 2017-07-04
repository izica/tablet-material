jQuery(document).ready(function($) {
    //show current
    $("body").on('click', '.table-select', function(event) {
        if($(this).hasClass('table-select--visible')){
            $('.table-select').removeClass('table-select--visible');
        }else{
            $('.table-select').removeClass('table-select--visible');
            event.preventDefault();
            event.stopPropagation();
            $(this).addClass('table-select--visible');
        }
    });
    //hide all
    $(window).click(function(event) {
        $('.table-select').removeClass('table-select--visible');
    });
    //select option
    $("body").on('click', '.table-select__item', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parents(".table-select").find('span').text($(this).text());
        $('.table-select').removeClass('table-select--visible');
    });

});
