const number = {
    format: function(value){
        value = String(value);
        value = value.replace(/[^0-9.]/g, "");
        if(value.trim() == "")
            value = "0";
        var array = value.split('').reverse(),
            res = "",
            count = 0;

        for (var i = 0; i < array.length; i++) {
            count++;
            res = res + array[i];
            if(count == 3 && i + 1 != array.length){
                res = res + " ";
                count = 0;
            }
        }
        return res.split('').reverse().join('');
    }
}
jQuery(document).ready(function($) {
    $(".number-format").each(function(index, el) {
        $(this).text(
            number.format(
                $(this).text()
            )
        );
    });
});
