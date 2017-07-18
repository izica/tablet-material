const DictionaryDescription = {
    dictionary_position: {
        columns: [
            {
                name: 'Наименование Должности',
                type: 'select'
            },{
                name: 'Базовый Бонус',
                type: 'field',
                number: true
            },{
                name: 'Признак Группы',
                type: 'select',
                number: true
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
                number: true
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
                number: true
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
                number: true
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
                number: true
            }
        ]
    },
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
        this.table.find('colgroup').append('<col width="40"></col>');
        this.table.find('.table-head tbody').append('<td class="table-head-checkbox"><span></span></td>');
        for (var i = 0; i < columns.length; i++) {
            this.table.find('colgroup').append('<col width="100%/' + columns.length + '"></col>');
            this.table.find('.table-head tbody').append('<td><span>' + columns[i].name + '</span></td>');
        }
        return this;
    },
    load(){
        //add ajax
        let data = FakeData.dictionary();
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
    addField(value, placeholder, isNumber){
        let css = "table-field";

        if(isNumber !== undefined){
            css = (isNumber === true) ? "table-field table-field--number" : "table-field",
            value = (isNumber === true) ? number.format(value) : value;
        }
        return  `<td>
                    <div class="` + css + `">
                        <input type="text" value="` + value + `" placeholder="` + placeholder + `"/>
                    </div>
                </td>`;
    },
    addCheckbox(){
        return `<td>
                    <div class="table-checkbox">
                        <i class="mdi mdi-checkbox-marked"></i>
                        <i class="mdi mdi-checkbox-blank-outline"></i>
                    </div>
                </td>`;
    },
    addRow(data){
        let columns_dictionary = DictionaryDescription[this.dictionary].columns;

        var row = $("<tr></tr>");
        row.append(this.addCheckbox());

        for (var i = 0; i < this.columns.length; i++) {
            if(this.columns[i].type == 'field'){
                row.append(this.addField(data[i], columns_dictionary[i].name, columns_dictionary[i].number));
            }else{
                row.append(this.addSelect(data[i], columns_dictionary[i].name, this.columns[i].values));
            }
        }
        this.table.find('.table-body tbody').append(row);
    },
    addRowEmpty(){
        let columns = DictionaryDescription[this.dictionary].columns;

        var row = $("<tr></tr>").addClass('table-row--empty');
        row.append(this.addCheckbox());
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
