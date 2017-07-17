jQuery(document).ready(function($) {
    $("body").on('click', '.table-checkbox', function(event) {
        event.preventDefault();
        if($(this).hasClass('table-checkbox--active')){
            $(this).removeClass('table-checkbox--active');
        }else{
            $(this).addClass('table-checkbox--active');
        }
    });
});
