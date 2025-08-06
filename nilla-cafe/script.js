
var scene_no = 0;
var talk = [
  "nilla: welcome to nilla nilla cafe!! <br><br><a onclick='progress()'>-&gt; thank you!! </a>",
  "nilla: wanna try a beta thing? <br><br><a onclick='progress()'>-> heckie yeckie!! </a>",
];
var reaction = [
  "../assets/smile.gif",
  "../assets/talk.gif"
];

var movelock = true;

function move(event) {
  if (movelock) {
    return;
  }
  var lim = [[210, 400], [-70, 380]];
  var k = event.keyCode,
    chrId = document.getElementById("sprite"),
    chr = {
      updown: function () {
        var y = parseInt(getComputedStyle(chrId).top);
        if (k == 38 && y > lim[0][0]) {
          y = y - 10;
        } else if (k == 40 && y < lim[0][1]) {
          y = y + 10;
        }
        return y;
      },

      leftright: function () {
        var x = parseInt(getComputedStyle(chrId).left);
        if (k == 37 && x > lim[1][0]) {
          x = x - 10;
          document.getElementById("sprite").style.transform =
            "scaleX(1)";
        } else if (k == 39 && x < lim[1][1]) {
          x = x + 10;
          document.getElementById("sprite").style.transform =
            "scaleX(-1)";
        }

        return x;
      }
    };
  chrId.style.top = chr.updown() + "px";
  chrId.style.left = chr.leftright() + "px";
}

function clear(event) {
  var k = event.keyCode;
  console.log(k == 32)
  if (k == 32) {
    scene_no = 0;
    display();
  }
}
document.addEventListener("keydown", move);
document.addEventListener("keydown", clear);

function progress() {
  scene_no++;
  display();
}

function display() {
  if (talk[scene_no] == null || scene_no >= talk.length) {
    console.log("null")
    document.getElementById("ui").style.display = "None";
    movelock = false;
    return;
  }
  movelock = true;
  document.getElementById("ui").style.display = "flex";
  document.getElementById("talkbubble").innerHTML = "<p class= 'talk'>" + talk[scene_no] + "</p>";
  document.getElementById("reaction").src = reaction[scene_no];

}
display()