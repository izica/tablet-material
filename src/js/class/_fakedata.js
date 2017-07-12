var FakeData = {
    random: function(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    },
    index: function(){
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
                    value: 140000,
                    progress: 50
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
    },
    dictionary: function(){

        let dictionary_columns = DictionaryDescription[Dictionary.dictionary].columns,
            response_columns = [],
            select_column = {
                id: '123fa-52dfa-ads3da-2sad2',
                type: 'select',
                values: ['Администратор', 'Менеджер', 'Продавец']
            },
            field_column = {
                id: '1232131gdfgdfg',
                type: 'field',
            },
            response_row = [],
            response_rows = [];
        for (var i = 0; i < dictionary_columns.length; i++) {
            if(dictionary_columns[i].type == 'field'){
                if(dictionary_columns[i].number === true){
                    response_row.push("10000");
                }
                else{
                    response_row.push("Текстовое значение");
                }
                response_columns.push(field_column)
            }else{
                response_row.push(select_column.values[FakeData.random(0, 2)]);
                response_columns.push(select_column)
            }
        }
        for (var i = 0; i < 13; i++) {
            response_rows.push(response_row);
        }
        return {
            //сюда список значений колонок
            columns: response_columns,
            //сюда строки и ячейки справочника или весов
            rows: response_rows
        }
    }


}
