jQuery(document).ready(function($) {
    //start point and finish point handle
    $(".curve-points__field").focus(function(event) {
        this.value = this.value.replace(/[^0-9\.]/g, "");
    });

    $(".curve-points__field").blur(function(event) {
        if(this.value.trim() == "")
            this.value = "0";

        this.value = this.value + "%";
    });

    $(".curve-points__field").keyup(function(event) {
        if(event.keyCode == 37 || event.keyCode == 39)
            return;

        event.preventDefault();
        if(this.value != this.value.replace(/[^0-9]/g, "")){
            this.value = this.value.replace(/[^0-9]/g, "");
        }
        if(this.value != "")
            if(this.value.length != String(parseInt(this.value)).length)
                this.value = parseInt(this.value);

        if(this.value != "")
            if(parseInt(this.value) > parseInt($(this).attr('max')))
                this.value = parseInt($(this).attr('max'));

        if(event.keyCode == 13){
            $(this).blur();
        }
    });

    //shape fields
    $(".curve-shape__field").keyup(function(event) {
        if(event.keyCode == 37 || event.keyCode == 39)
            return;

        event.preventDefault();
        if(this.value != this.value.replace(/[^0-9.]/g, "")){
            this.value = this.value.replace(/[^0-9.]/g, "");
        }

        let input = $(this),
            value = parseFloat(input.val()),
            max = parseFloat(input.attr('max')),
            min = parseFloat(input.attr('min'));

        if(value < min){
            value = min;
            value = Math.round(value * 100) / 100;
            value = (String(value).length == 1) ? value + '.00' : value;
            value = (String(value).length == 3) ? value + '0' : value;
            input.val(value);
        }else{
            if(value > max){
                value = max;
                value = Math.round(value * 100) / 100;
                value = (String(value).length == 1) ? value + '.00' : value;
                value = (String(value).length == 3) ? value + '0' : value;
                input.val(value);
            }
        }


        if(event.keyCode == 13){
            $(this).blur();
        }
    });
    $(".curve-shape__field").blur(function(event) {
        event.preventDefault();
        if(this.value.trim() == "")
            this.value = "0";
        let input = $(this),
            value = parseFloat(input.val()),
            max = parseFloat(input.attr('max')),
            min = parseFloat(input.attr('min'));
        if(value < min)
            value = min;
        if(value > max)
            value = max;
        value = Math.round(value * 100) / 100;
        value = (String(value).length == 1) ? value + '.00' : value;
        value = (String(value).length == 3) ? value + '0' : value;
        input.val(value);
    });


    $(".curve-shape__btn--minus").click(function(event) {
        let input = $(this).parent().find('input'),
            value = parseFloat(input.val()),
            max = parseFloat(input.attr('max')),
            min = parseFloat(input.attr('min'));
        value = value - 0.01;
        if(value < min)
            value = min;
        value = Math.round(value * 100) / 100;
        value = (String(value).length == 1) ? value + '.00' : value;
        value = (String(value).length == 3) ? value + '0' : value;
        input.val(value);
    });

    $(".curve-shape__btn--plus").click(function(event) {
        let input = $(this).parent().find('input'),
            value = parseFloat(input.val()),
            max = parseFloat(input.attr('max')),
            min = parseFloat(input.attr('min'));
        value = value + 0.01;
        if(value > max)
            value = max;
        value = Math.round(value * 100) / 100;
        value = (String(value).length == 1) ? value + '.00' : value;
        value = (String(value).length == 3) ? value + '0' : value;
        input.val(value);
    });

    //base bonus
    $(".curve-bonus__value--base").keyup(function(event) {
        if(event.keyCode == 37 || event.keyCode == 39)
            return;

        event.preventDefault();
        if(this.value != this.value.replace(/[^0-9]/g, "")){
            this.value = this.value.replace(/[^0-9]/g, "");
        }
        if(this.value != "")
            if(this.value.length != String(parseInt(this.value)).length)
                this.value = parseInt(this.value);

        if(this.value != "")
            Curve.setBase(this.value);

        if(event.keyCode == 13){
            $(this).blur();
        }
    });

    $("body").on('blur', '.curve-bonus__value--base', function(event) {
        event.preventDefault();
        if(this.value.trim() == ""){
            this.value = '0';
        }
        this.value = number.format(this.value);
    });


    $("body").on('focus', '.curve-bonus__value--base', function(event) {
        event.preventDefault();
        this.value = this.value.replace(/[^0-9]/g, "");
    });

    //slider value
    $(".curve-slider__value").keyup(function(event) {
        if(event.keyCode == 37 || event.keyCode == 39)
            return;

        event.preventDefault();
        if(this.value != this.value.replace(/[^0-9]/g, "")){
            this.value = this.value.replace(/[^0-9]/g, "");
        }
        if(this.value != "")
            if(this.value.length != String(parseInt(this.value)).length)
                this.value = parseInt(this.value);

        if(event.keyCode == 13){
            $(this).blur();
        }
    });

    $(".curve-slider__value").focus(function(event) {
        this.value = this.value.replace(/[^0-9\.]/g, "");
    });

    $(".curve-slider__value").blur(function(event) {
        if(this.value.trim() != ""){
            if(parseInt(this.value) > parseInt($(this).attr('max')))
                this.value = parseInt($(this).attr('max'));

            if(parseInt(this.value) < parseInt($(this).attr('min')))
                this.value = parseInt($(this).attr('min'));
        }else{
            this.value = $(this).attr('min');
        }
        Curve.setSlider(this.value);
        this.value = this.value + "%";
    });

    Curve.getList();
});
