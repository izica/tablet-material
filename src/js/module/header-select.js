jQuery(document).ready(function($) {
    //show current
    $("body").on('click', '.header-select', function(event) {
        Popup.hide();
        Popup.show($(this).attr('type'));
    });
    //select option
    $("body").on('click', '.popup-list__item', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(".header-select--visible span").text($(this).text());
        let dictionary = $(this).attr('dictionary');
        if(dictionary !== undefined)
            Dictionary.init(dictionary).load();

        Popup.hide();
    });
    //select first view
    $(".admin-menu__item--active").click();
});
