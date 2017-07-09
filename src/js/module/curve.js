jQuery(document).ready(function($) {
    var slider = $(".curve-slider__body").append('<div><div>').find('div')[0];
    noUiSlider.create(slider, {
        start: 100,
        connect: [true, false],
        range: {
        	'min': 60,
        	'max': 130
        }
    });
    slider.noUiSlider.on('slide', function(){
        let value = parseInt(slider.noUiSlider.get());
        $(".curve-slider__value").val(value + "%")
    });

});
