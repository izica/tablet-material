jQuery(document).ready(function($) {
    $(".header-button--edit").click(function(event) {
        Popup.get('edit').find('input').val($(".header-select--curve span").text());
        Popup.show('edit');
    });

    $(".popup__btn--cancel").click(function(event) {
        Popup.hide();
    });

    $(".popup__btn--ok").click(function(event) {
        Popup.hide();
        $(".header-select--curve span").text(
            Popup.get('edit').find('input').val()
        );
    });

    $(".header-save").click(function(event) {
        Popup.show('save');
    });
});
