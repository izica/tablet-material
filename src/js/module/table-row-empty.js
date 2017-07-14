jQuery(document).ready(function($) {
    $("body").on('click', '.table-row--empty .table-select__item', function(event) {
        event.preventDefault();
        $(this).parents('.table-row--empty').removeClass('table-row--empty');
        Dictionary.addRowEmpty();
    });

    $("body").on('keyup', '.table-row--empty .table-field input', function(event) {
        event.preventDefault();
        $(this).parents('.table-row--empty').removeClass('table-row--empty');
        Dictionary.addRowEmpty();
    });
});
