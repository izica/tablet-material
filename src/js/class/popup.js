var Popup = {
    show: function(name){
        $(".popup").removeClass('popup--visible');
        $(".popup--" + name).addClass('popup--visible');
    },
    hide: function(){
        $(".popup").removeClass('popup--visible');
    },
    get: function(name){
        return $(".popup--" + name);
    }
}
jQuery(document).ready(function($) {
    $(".popup__overlay").click(function(event) {
        Popup.hide();
    });
});
