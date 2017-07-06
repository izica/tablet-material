jQuery(document).ready(function($) {
    var fakeData = function(){
        var row = {
            name: 'Формула здоровья',
            weight: '50%',
            plan: 1000,
            fact: 1500,
            progress: '50%',
            bonus: '7 000 ₽',
            prediction: {
                value: 130,
                max: 200
            },
            chart: {
                calc: {
                    value: 70000,
                    progress: 40
                },
                base: {
                    value: 210000,
                    progress: 60
                },
                plus: {
                    value: 237000,
                    progress: 100
                },
            },
        }
        var data = [];
        for (var i = 0; i < 20; i++) {
            data.push($.extend(true, {}, row));
            row.chart.plus.progress = row.chart.plus.progress - 1.5;
            row.chart.base.progress = row.chart.base.progress - 1;
        }
        return data;
    }

    var loadData = function(){
        // $.ajax({
        //     url: 'path/to/data',
        //     type: 'GET',
        //     dataType: 'jsonp',
        // })
        // .done(result => {
        //     //render there
        // });
        var data = fakeData();
        Table.init(".table--main").render(data);
        Chart.render(data);
    }

    loadData();

});
