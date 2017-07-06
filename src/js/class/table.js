const Table = {
    init(tableClass){
        this.table = tableClass;
        return this;
    },
    clear(){
        $(this.table + ' .table-body tr').remove();
        return this;
    },
    renderSliders(){
        $(this.table + ' .table-slider').each(function(index, el) {
            var slider = $(this).append('<div><div>').find('div')[0];
            noUiSlider.create(slider, {
                start: parseInt($(this).attr('data-value')),
                connect: [true, false],
                range: {
                	'min': 0,
                	'max': parseInt($(this).attr('data-max'))
                }
            });

        });

        return this;
    },
    addCell(row, data, type = false){
        var cell = $('<td></td>').text(data);
        if(type === 'bonus'){
            cell.addClass('table-bonus');
        }
        if(type === 'slider'){
            cell.text('').addClass('table-slider').attr('data-max', data.max).attr('data-value', data.value);
        }
        if(type == 'field'){
            cell.text('').append(
                $('<div></div>').addClass('table-field').addClass('table-field--number').append(
                    $('<input type="text"/>').val(Number.format(data))
                )
            )
        }
        row.append(cell);
    },
    addRow(data){
        let row = $('<tr></tr');
        this.addCell(row, data.name);
        this.addCell(row, data.weight);
        this.addCell(row, data.plan, 'field');
        this.addCell(row, data.fact, 'field');
        this.addCell(row, data.progress);
        this.addCell(row, data.bonus, 'bonus');
        this.addCell(row, data.prediction, 'slider');
        $(this.table + ' .table-body tbody').append(row);
    },
    render(data){
        this.clear();
        for (var i = 0; i < data.length; i++) {
            this.addRow(data[i]);
        }
        this.renderSliders();
    },
}
