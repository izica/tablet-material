var Curve = {
    y: 0,
    x: 0,
    bonus_plus: 0,
    bonus_base: [0, 0],
    target: 0,
    points: [],
    init(data){
        this.bonus_plus = data.bonus_plus;
        this.bonus_base = data.bonus_base;
        this.target = data.target;
        this.points = data.points;

        $(".curve-points__field--start").val(data.point_start + '%');
        $(".curve-points__field--finish").val(data.point_finish + '%');
        $(".curve-shape__field--1").val(data.shape_1);
        $(".curve-shape__field--2").val(data.shape_2);
        $(".curve-bonus__value--base").text(number.format(data.bonus_base));
        $(".curve-bonus__value--plus").text(number.format(data.bonus_plus));
        
        return this;
    },
    draw: function(data){
        this.renderLines().renderBonus().renderTarget().renderGraph();
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
    setTarget: function(index){
        this.target = index;
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
            point_start: 80,
            point_finish: 130,
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
    }
}
