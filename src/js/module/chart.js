jQuery(document).ready(function($) {
    $(".chart-bonus__progress").each(function(index, el) {
        $(this).width($(this).attr('progress'));
    });

    // $(".chart-head-column").each(function(index, el) {
    //     $(this).css({
    //         'width': $(this).attr('width'),
    //         'min-width': $(this).attr('width'),
    //         'max-width': $(this).attr('width'),
    //     });
    // });
    // $(".chart-body-column").each(function(index, el) {
    //     $(this).css({
    //         'width': $(this).attr('width'),
    //         'min-width': $(this).attr('width'),
    //         'max-width': $(this).attr('width'),
    //     });
    // });
});
