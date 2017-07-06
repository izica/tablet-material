var Number = {
    format: function(number){
        number = String(number);
        number = number.replace(/[^0-9.]/g, "");
        var array = number.split('').reverse(),
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
            Number.format(
                $(this).text()
            )
        );
    });
});
