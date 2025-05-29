var color = "white";
var speed = 1000;

var sparkles = [];
var sequence = ["∗", "⋅"];
$(document).ready(function(){
    var sparkle_jar = document.createElement("div");
  var num_sparkles = 100;
  for (var i=0;i<num_sparkles;i++){
    var x = Math.random()*window.outerWidth;
    var y = Math.random()*window.outerHeight;
    var s = Math.random()*20;
    var sparkle = document.createElement("p");
    $(sparkle).html("*")
      .addClass("sparkle")
      .css("position","absolute")
      .css("top",y)
      .css("left",x)
      .css("color",color)
      .css("text-align","center")
      .css("width",s+"px")
      .css("font-size",s)
    .appendTo($(sparkle_jar));
    sparkles.push(sparkle);
    animate(sparkle,Math.floor(Math.random()*sequence.length));
  }
  $(sparkle_jar).addClass("sparkle_jar")
      .css("position","absolute")
      .css("top",0)
      .css("left",0)
      .css("width","100%")
      .css("height","100%")
      .css("overflow","hidden")
      .css("pointer-events","none")
    .appendTo(document.body);
});

function animate(sparkle, frame){
  $(sparkle).html(sequence[frame]);
  setTimeout(function(){animate(sparkle,(frame+1)%sequence.length)},speed+Math.random()*speed);
}