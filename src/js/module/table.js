jQuery(document).ready(function($) {
    //table init
    var row = $(".table-body").html();
    for (var i = 0; i < 25; i++) {
        console.log(22);
        $(".table-body").append(row);
    }

    var table_head_absolute = $("<div></div>").addClass('table-head').addClass('table-head--absolute').append($('.table-head').html());
    $(".table-wrap").prepend(table_head_absolute);

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
        $(this).width($(this).attr('width'));
    });


});
