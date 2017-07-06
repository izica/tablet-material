var Popup = {
    show: function(name){
        $(".popup").removeClass('popup--visible');
        $(".popup--" + name).addClass('popup--visible');
    },
    hide: function(){
        $(".popup").removeClass('popup--visible');
    }
}
