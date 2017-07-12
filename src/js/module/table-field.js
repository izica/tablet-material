jQuery(document).ready(function($) {
    $("body").on('keyup', '.table-field--number input', function(event) {
        if(event.keyCode == 37 || event.keyCode == 39)
            return;

        event.preventDefault();
        if(this.value != this.value.replace(/[^0-9.]/g, "")){
            this.value = this.value.replace(/[^0-9.]/g, "");
            if(this.value != "")
                this.value = parseInt(this.value);
        }
    });

    $("body").on('keyup', '.table-field input', function(event) {
        if(event.keyCode == 37 || event.keyCode == 39)
            return;

        event.preventDefault();
        if(event.keyCode == 13){
            $(this).blur();
        }
    });

    $("body").on('blur', '.table-field--number input', function(event) {
        event.preventDefault();
        if(this.value.trim() == ""){
            this.value = '0';
        }
        this.value = number.format(this.value);
        if($(this).parent().hasClass('table-field--ruble')){
            this.value = this.value + ' ₽';
        }
    });


    $("body").on('focus', '.table-field--number input', function(event) {
        event.preventDefault();
        this.value = this.value.replace(/[^0-9.]/g, "");
    });

});
