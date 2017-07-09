jQuery(document).ready(function($) {
    var loadData = function(){
        // $.ajax({
        //     url: 'path/to/data',
        //     type: 'GET',
        //     dataType: 'jsonp',
        // })
        // .done(result => {
        //     //render there
        // });
        var data = FakeData.index();
        Table.init(".table--main").render(data);
        Chart.render(data);
    }

    loadData();

});
