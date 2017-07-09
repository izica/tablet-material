var Curve = {
    y: 0,
    x: 0,
    bonus_plus: 0,
    bonus_base: [0, 0],
    init: function(data){
        this.bonus_plus = data.bonus_plus;
        this.bonus_base = data.bonus_base;
        return this;
    },
    lines: function(){
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
    bonus(){
        let width = (100 * (this.bonus_base[0] / 220)) + "%",
            height = (100 * (this.bonus_base[1] / this.bonus_plus)) + "%";
        console.log(this.bonus_base);
        console.log(width);
        console.log(height);
        $(".curve-graph-base").width(width);
        $(".curve-graph-base").height(height);
        return this;
    }
}
jQuery(document).ready(function($) {
    var data = {
        bonus_plus: 240000,
        bonus_base: [90, 140630],
        target: 60, //target - point index,
        points: [[60, 0]],
    }
    var point = [60, 0]; //x, y
    var coef = 500;
    for (var i = 0; i < 159; i++) {
        let new_point = point.slice();
        var c = FakeData.random(0, 100);
        if(c > 90){
            new_point = new_point - coef;
        }else{
            new_point = new_point + coef;
        }
        data.points.push(new_point);
    }
    console.log(data);
    Curve.init(data).lines().bonus();
});
