jQuery(document).ready(function($) {
    $(".curve-shape__field").focus(function(event) {
        this.value = this.value.replace(/[^0-9.]/g, "");
    });

    $(".curve-points__field").focus(function(event) {
        this.value = this.value.replace(/[^0-9\.]/g, "");
    });

    $(".curve-points__field").blur(function(event) {
        this.value = this.value + "%";
    });

    $(".curve-points__field").keyup(function(event) {
        if(event.keyCode == 37 || event.keyCode == 39)
            return;

        this.value = this.value.replace(/[^0-9\.]/g, "");

        if(this.value.trim() == "")
            this.value = 0;

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

    Curve.getList();
});
