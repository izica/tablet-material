jQuery(document).ready(function($) {
    $("body").on('keyup', '.table-field--number input', function(event) {
        event.preventDefault();
        this.value = Number.format(this.value);
        if(event.keyCode == 13){
            $(this).blur();
        }
        // console.log(event);
    });
});
