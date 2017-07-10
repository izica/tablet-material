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


    $(".curve-points__field").focus(function(event) {
        this.value = this.value.replace(/[^0-9.]/g, "");
    });

    $(".curve-points__field").blur(function(event) {
        this.value = this.value + "%";
    });

    $(".curve-points__field").keyup(function(event) {
        this.value = parseInt(this.value.replace(/[^0-9.]/g, ""));
        if(parseInt(this.value) < 0)
            this.value = 0
        if(parseInt(this.value) > parseInt($(this).attr('max')))
            this.value = parseInt($(this).attr('max'));
        if(event.keyCode == 13){
            $(this).blur();
        }
    });

    $(".curve-shape__btn--minus").click(function(event) {
        let value = $(this).parent().find('input').val();
        value = parseFloat(value) - 0.01;
        value = Math.round(value * 100) / 100;
        $(this).parent().find('input').val(value);
    });
    $(".curve-shape__btn--plus").click(function(event) {
        let value = $(this).parent().find('input').val();
        value = parseFloat(value) + 0.01;
        value = Math.round(value * 100) / 100;
        $(this).parent().find('input').val(value);
    });

    Curve.load();

});
