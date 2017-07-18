jQuery(document).ready(function($) {
    $("body").on('click', '.table-checkbox', function(event) {
        event.preventDefault();
        if($(this).hasClass('table-checkbox--active')){
            $(this).removeClass('table-checkbox--active');
            if($('.table-checkbox--active').length == 0){
                $(".header").addClass('header--hide');
                $(".header--light").removeClass('header--hide');
            }
        }else{
            $(this).addClass('table-checkbox--active');
            $(".header").addClass('header--hide');
            $(".header--edit").removeClass('header--hide');
        }
    });

    $(".header-dictionary__button--cancel").click(function(event) {
        $('.table-checkbox').removeClass('table-checkbox--active');
        $(".header").addClass('header--hide');
        $(".header--light").removeClass('header--hide');
    });

    $(".header-dictionary__button--delete").click(function(event) {
        $('.table-checkbox--active').parents('tr').remove();
        $(".header").addClass('header--hide');
        $(".header--light").removeClass('header--hide');
    });
});
