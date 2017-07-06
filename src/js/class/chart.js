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
        $('.chart-body').append(
            '<div class="chart-body-row">'+
                '<div class="chart-body-column">' + data.name + '</div>'+
                '<div class="chart-body-column">'+
                    '<div class="chart-bonus">'+
                        '<div class="chart-bonus__plus chart-bonus__progress" progress="' + data.chart.plus.progress + '%" value="' + data.chart.plus.value + ' Р">'+
                            '<div class="chart-bonus__base chart-bonus__progress" progress="' + data.chart.base.progress + '%" value="' + data.chart.base.value + ' Р"></div>'+
                            '<div class="chart-bonus__calc chart-bonus__progress" progress="' + data.chart.calc.progress + '%" value="' + data.chart.calc.value + ' Р"></div>'+
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
