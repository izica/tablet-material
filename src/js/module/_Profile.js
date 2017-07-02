var Profile = {
    getFakeData(){
        return {
            name: 'Петров Константин Константинович',
            position: 'Администратор',
            bonus: '31234 P',
            bonus_calc: '12313 P',
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
    render(data){
        $(".profile__name span").text(data.name);
        $(".profile__position").text(data.position);
        $(".profile__amount").text(data.bonus);
        $(".info__text--bonus").text(data.bonus_calc);
        $(".info__text--ratio").text(data.ratio);
        $(".today__text").text(data.date);
    }
}
