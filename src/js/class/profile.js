var Profile = {
    getFakeData(){
        return {
            name: 'Петров Константин Константинович',
            position: 'Администратор Адм инист ратор Админ истра тор',
            bonus: '31 234 ₽',
            bonus_calc: '12 313 ₽',
            ratio: '46 %',
            date: 'Вторник, 23 мая 2017',
        }
    },
    getCurrentUser(){
        // $.ajax({
        //     url: '/path/to/file',
        //     type: 'GET',
        //     dataType: 'jsonp',
        // })
        // .done(result =>  {
        //     this.render(result);
        // });

        this.render(this.getFakeData());
    },
    getUsersList(){
        $('.profile-select-item').remove();
        var row = {
            name: 'Шахова Марина Павловна',
            position: 'Менеджер asd ad adadsad sad adsadas ',
        }
        var data = [];
        for (var i = 0; i < 10; i++) {
            data.push(row);
        }
        this.renderUsersList(data);
    },
    renderUsersList(data){
        for (var i = 0; i < data.length; i++) {
            $('.profile-select-list').append(
                '<div class="profile-select-item">'+
                    '<div class="profile-select-item__image">'+
                        '<i class="mdi mdi-account"></i>'+
                    '</div>'+
                    '<div class="profile-select-item__name">' + data[i].name + '</div>'+
                    '<div class="profile-select-item__position">' + data[i].position + '</div>'+
                '</div>'
            );
        }
    },
    render(data){
        $(".profile__name span, .profile-select-header__name").text(data.name);
        $(".profile__position, .profile-select-header__position").text(data.position);
        $(".profile__amount").text(data.bonus);
        $(".info__text--bonus").text(data.bonus_calc);
        $(".info__text--ratio").text(data.ratio);
        $(".today__text").text(data.date);
    }
}
