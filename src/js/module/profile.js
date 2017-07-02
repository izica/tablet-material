jQuery(document).ready(function($) {
    Profile.getCurrentUser();

    $(".profile__name").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(".profile-select").addClass('profile-select--visible');
    });

    $(window).click(function(e) {
        $(".profile-select").removeClass('profile-select--visible');
    });

    $(window).keyup(function(e) {
        if(e.keyCode == 27) //escape
            $(".profile-select").removeClass('profile-select--visible');
    });

    $(".profile-select").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $(".profile-select-item").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        alert($(this).find('.profile-select-item__name').text());
        $(".profile-select").removeClass('profile-select--visible');
    });
});
