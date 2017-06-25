jQuery(document).ready(function($) {
    $(".table-head__cell").each(function(index, el) {
        $(this).width($(this).attr('width'));
    });
});
