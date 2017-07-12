var Curve = {
    y: 0,
    x: 0,
    bonus_plus: 0,
    bonus_base: [0, 0],
    point_start: 0,
    point_finish: 0,
    target: 0,
    points: [],
    slider: null,
    init(data){
        this.bonus_plus = data.bonus_plus;
        this.bonus_base = data.bonus_base;
        this.target = data.target;
        this.points = data.points;
        this.point_start = data.point_start;
        this.point_finish = data.point_finish;

        $(".curve-points__field--start").val(data.point_start + '%');
        $(".curve-points__field--finish").val(data.point_finish + '%');
        $(".curve-shape__field--1").val(data.shape_1);
        $(".curve-shape__field--2").val(data.shape_2);
        $(".curve-bonus__value--base").text(number.format(data.bonus_base[1]));
        $(".curve-bonus__value--plus").text(number.format(data.bonus_plus));

        return this;
    },
    draw: function(data){
        this.renderSlider().renderLines().renderBonus().renderTarget().renderText().renderGraph();
        return this;
    },
    renderText(){
        let left = (85 * (this.points[this.points.length - 1][0] / 220)) + "%",
            bottom = (102 * (this.points[this.points.length - 1][1] / (this.bonus_plus + 10000))) + "%";
        $(".curve-graph-text").css({
            bottom: bottom,
            left: left
        });
        return this;
    },
    renderSlider: function(){
        this.slider = $('.curve-slider__body').find('div')[0];
        noUiSlider.create(this.slider, {
            start: 100,
            connect: [true, false],
            range: {
                'min': this.point_start,
                'max': this.point_finish
            }
        });
        this.slider.noUiSlider.on('slide', function(){
            let value = parseInt(this.slider.noUiSlider.get());
            $(".curve-slider__value").val(value + "%")
            this.setTarget(value);
        }.bind(this));

        return this;
    },
    renderLines: function(){
        $(".curve-graph-lines-x div").remove();
        $(".curve-graph-lines-y div").remove();

        this.y = Math.ceil(this.bonus_plus / 10000) + 2;
        this.x = 22;
        for (var i = 0; i < this.x; i++) {
            $(".curve-graph-lines-x").append("<div><span>" + (i * 10) + "</span></div>");
        }
        for (var i = 0; i < this.y; i++) {
            $(".curve-graph-lines-y").append("<div><span>" + (i * 10) + "</span></div>");
        }
        return this;
    },
    renderBonus: function(){
        let width = (100 * (this.bonus_base[0] / 220)) + "%",
            height = (100 * (this.bonus_base[1] / (this.bonus_plus + 10000))) + "%";
        $(".curve-graph-base").width(width);
        $(".curve-graph-base").height(height);
        return this;
    },
    renderTarget: function(){
        let width = (100 * (this.points[this.target][0] / 220)) + "%",
            height = (100 * (this.points[this.target][1] / (this.bonus_plus + 10000))) + "%";
        $(".curve-graph-target").width(width);
        $(".curve-graph-target").height(height);
        // console.log(height);
        // console.log(width);
        $(".curve-graph-point").css({
            left: width,
            bottom: height
        });
        return this;
    },
    setTarget: function(value){
        let dif = 9999,
            dif_index = 0;
        for (var i = 0; i < this.points.length; i++) {
            let dif_x = Math.abs(value - this.points[i][0]);
            console.log(dif_x);
            if(dif_x < dif){
                dif = dif_x;
                dif_index = i;
            }
        }
        console.log(dif);

        this.target = dif_index;
        return this.renderTarget();
    },
    renderGraph: function(){
        var line = d3.svg.line()
            .x(function(d){
                let value = d[0] * $("svg").width() / 220;
                return value;
            })
            .y(function(d){
                let value = d[1] * $("svg").height() / (this.bonus_plus + 10000);
                return value;
            }.bind(this))
            .interpolate("cardinal");
        let { points } = this;
        d3.select("path").data([points]).attr("d", line);
    },
    fakeData(){
        var data = {
            bonus_plus: 240000,
            bonus_base: [100, 140630],
            point_start: 60,
            point_finish: 150,
            shape_1: 0.77,
            shape_2: 1.35,
            target: 130, //target - point index,
            points: [],
        }
        var point = [0, 0]; //x, y
        var step = 90/160;
        for (var i = 60; i < 150; i = i + step) {
            point[0] = i;
            point[1] = 11*i*i + i * 240 - 55404;

            data.points.push(point.slice());
        }
        return data;
    },
    load(){
        //load data from ajax
        var data = this.fakeData();
        this.init(data).draw();
    },
    getList(){
        $(".popup--curve").find('.popup-list__item').remove();
        var list = [
            'curve 1',
            'curve 2',
            'curve 3'
        ];
        for (var i = 0; i < list.length; i++) {
            $(".popup--curve").find('.popup-list').append('<div class="popup-list__item">' + list[i] + '</div>')
        }
    }
}
