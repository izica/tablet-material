var Popup = {
    show: function(name){
        $(".popup").removeClass('popup--visible');
        $(".popup--" + name).addClass('popup--visible');
    },
    hide: function(){
        $(".popup").removeClass('popup--visible');
    }
}
jQuery(document).ready(function($) {
    $(".popup__overlay").click(function(event) {
        Popup.hide();
    });
});
