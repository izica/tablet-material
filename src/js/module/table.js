jQuery(document).ready(function($) {

    $(".table-body__cell--slider").each(function(index, el) {
        var slider = $(this).append('<div><div>').find('div')[0];
        noUiSlider.create(slider, {
            start: 30,
            connect: [true, false],
            range: {
            	'min': 0,
            	'max': 100
            }
        });
        
    });


    $(".table-head__cell").each(function(index, el) {
        $(this).width($(this).attr('width'));
    });
});
