jQuery(document).ready(function($) {
    var Table = {
        table: '',
        row: '',
        columns: [],
        init(tableClass){
            this.table = tableClass;
            return this;
        },
        // columns(){
        //     var columns = [];
        //     $(this.table + ' .table-head td').each(function(index, el) {
        //         columns.push($(this).attr('width'));
        //     });
        //     $(this.table + ' tr').each(function(index, el) {
        //         for (var i = 0; i < columns.length; i++) {
        //             $(this).find('td').eq(i).attr('width', columns[i]);
        //         }
        //     });
        //     return this;
        // },
        sliders(){
            $(this.table + ' .table-slider').each(function(index, el) {
                var slider = $(this).append('<div><div>').find('div')[0];
                noUiSlider.create(slider, {
                    start: 30,
                    connect: [true, false],
                    range: {
                    	'min': 0,
                    	'max': 100
                    }
                });

            });

            return this;
        }
    }

    Table.init(".table--main").sliders();
    //     .scrollable()
    //     .columns(315, 135, 175, 175, 165, 145, '100%')
    //     .build();
});
