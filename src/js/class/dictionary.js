const DictionaryDescription = {
    dictionary_position: {
        columns: [
            {
                name: 'Наименование Должности',
                type: 'select'
            },{
                name: 'Базовый Бонус',
                type: 'field'
            },{
                name: 'Признак Группы',
                type: 'select'
            }
        ]
    },
    dictionary_bonus_position: {
        columns: [
            {
                name: 'Наименование Бонусной Должности',
                type: 'select',
            },{
                name: 'Тип расчета',
                type: 'select',
            }
        ]
    },
    dictionary_brand: {
        columns: [
            {
                name: 'Наименование Бренда',
                type: 'field',
            },{
                name: 'Наименование Кривой',
                type: 'select',
            }
        ]
    },
    dictionary_bu: {
        columns: [
            {
                name: 'Наименование БЮ',
                type: 'select',
            },{
                name: 'Наименование Кривой',
                type: 'select',
            }
        ]
    },
    dictionary_pharmacy: {
        columns: [
            {
                name: 'Наименование аптечной сети',
                type: 'field',
            },{
                name: 'Наименование БЮ',
                type: 'select',
            },{
                name: 'Наименование Кривой',
                type: 'select',
            }
        ]
    },
    dictionary_other: {
        columns: [
            {
                name: 'Наименование элементов зоны ответственности',
                type: 'select',
            },{
                name: 'Наименование Кривой',
                type: 'select',
            }
        ]
    },
    weight_brand: {
        columns: [
            {
                name: 'Бонусная Должность',
                type: 'select',
            },{
                name: 'БЮ',
                type: 'select',
            },{
                name: 'Линия',
                type: 'select',
            },{
                name: 'Бренд',
                type: 'field',
            },{
                name: 'Вес (в %)',
                type: 'field',
            }
        ]
    },
    weight_bu: {
        columns: [
            {
                name: 'Бонусная Должность',
                type: 'select',
            },{
                name: 'БЮ',
                type: 'select',
            },{
                name: 'Вес (в %)',
                type: 'field',
            }
        ]
    },
    weight_pharmacy: {
        columns: [
            {
                name: 'Бонусная Должность',
                type: 'select',
            },{
                name: 'Аптечная сеть',
                type: 'field',
            },{
                name: 'Вес (в %)',
                type: 'field',
            }
        ]
    },
    weight_other: {
        columns: [
            {
                name: 'Бонусная Должность',
                type: 'select',
            },{
                name: 'Элемент зоны ответственности',
                type: 'select',
            },{
                name: 'Вес (в %)',
                type: 'field',
            }
        ]
    },
}

var fakeDictionaryData = function(){
    function random(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
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
            response_row.push("Текстовое значение");
            response_columns.push(field_column)
        }else{
            response_row.push(select_column.values[random(0, 2)]);
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

const Dictionary = {
    table: null,
    dictionary: '',
    columns: [],
    init(name){
        this.table = $(".table--dictionary");
        this.dictionary = name;
        this.initRender();
        return this;
    },
    initRender(){
        let columns = DictionaryDescription[this.dictionary].columns;
        this.table.find('col').remove();
        this.table.find('tr').remove();
        this.table.find('td').remove();
        for (var i = 0; i < columns.length; i++) {
            this.table.find('colgroup').append('<col width=1/' + columns.length + '></col>');
            this.table.find('.table-head tbody').append('<td><span>' + columns[i].name + '</span></td>');
        }
        return this;
    },
    load(){
        //add ajax
        let data = fakeDictionaryData();
        console.log(data);
        this.columns = data.columns;
        for (var i = 0; i < data.rows.length; i++) {
            this.addRow(data.rows[i]);
        }
        this.addRowEmpty();
    },
    addSelect(value, placeholder, values){
        let css = (value === false) ? 'table-select table-select--empty' : 'table-select';
        value = (value === false) ? placeholder : value;
        return  `<td>
                    <div class="` + css + `">
                        <span>` + value + `</span>
                        <i class="mdi mdi-chevron-down"></i>
                        <ul class="table-select__list">
                            ` + values.map(item => {
                                return '<li class="table-select__item">' + item + '</li>'
                            }).join('') + `
                        </ul>
                    </div>
                </td>`;
    },
    addField(value, placeholder){
        return  `<td>
                    <div class="table-field">
                        <input type="text" value="` + value + `" placeholder="` + placeholder + `"/>
                    </div>
                </td>`;
    },
    addRow(data){
        let columns_dictionary = DictionaryDescription[this.dictionary].columns;

        var row = $("<tr></tr>");
        for (var i = 0; i < this.columns.length; i++) {
            if(this.columns[i].type == 'field'){
                row.append(this.addField(data[i], columns_dictionary[i].name));
            }else{
                row.append(this.addSelect(data[i], columns_dictionary[i].name, this.columns[i].values));
            }
        }
        this.table.find('.table-body tbody').append(row);
    },
    addRowEmpty(){
        let columns = DictionaryDescription[this.dictionary].columns;

        var row = $("<tr></tr>");
        for (var i = 0; i < columns.length; i++) {
            if(columns[i].type == 'field'){
                row.append(this.addField('', columns[i].name));
            }else{
                row.append(this.addSelect(false, columns[i].name, this.columns[i].values));
            }
        }
        this.table.find('.table-body tbody').append(row);
    }
}
