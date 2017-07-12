const Chart = {
    clear(){
        $('.chart-body-row').remove();
        return this;
    },
    progress(){
        $('.chart-bonus__progress').each(function(index, el) {
            $(this).width($(this).attr('progress'));
        });
    },
    addRow(data){
        let active = "";
        if(data.chart.calc.progress > data.chart.base.progress)
            active = 'chart-bonus__plus--active';
        $('.chart-body').append(
            '<div class="chart-body-row">'+
                '<div class="chart-body-column">' + data.name + '</div>'+
                '<div class="chart-body-column">'+
                    '<div class="chart-bonus">'+
                        '<div class="chart-bonus__plus ' + active + ' chart-bonus__progress" progress="' + data.chart.plus.progress + '%" value="' + number.format(data.chart.plus.value) + ' ₽">'+
                            '<div class="chart-bonus__base chart-bonus__progress" progress="' + data.chart.base.progress + '%" value="' + number.format(data.chart.base.value) + ' ₽"></div>'+
                            '<div class="chart-bonus__calc chart-bonus__progress" progress="' + data.chart.calc.progress + '%" value="' + number.format(data.chart.calc.value) + ' ₽"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
        );

    },
    lines(value){
        $('.chart-body-lines').html('');
        var count = Math.floor(parseInt(value)/10000),
            left = 0,
            offset = 100 * (10000/value);
        for (var i = 0; i < count; i++) {
            left += offset;
            $('.chart-body-lines').append($("<div></div>").css('left', left + '%'));
        }
    },
    render(data){
        this.clear();
        for (var i = 0; i < data.length; i++) {
            this.addRow(data[i]);
        }
        this.lines(data[0].chart.plus.value);
        this.progress();
    },
}
