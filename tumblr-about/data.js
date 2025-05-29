var me = {
  "flowey": "https://64.media.tumblr.com/60e9ee26959f113670a51eb219aa89f9/tumblr_nykimigG2w1tqt1h6o1_400.gif",
  "sans":"https://45.media.tumblr.com/149170d2566497e8b2ebefc602a978cf/tumblr_nykimigG2w1tqt1h6o2_r1_400.gif",
  "jk":"http://49.media.tumblr.com/871725fda541363a637e61442f94246e/tumblr_nykimigG2w1tqt1h6o3_r1_250.gif",
}
function darken(){
    $("#bg").css("background-color","#000");
    $("#talkbubble").css("background-color","#333");
    $("#talkbubble-tri").css("border-color","transparent transparent #333 transparent");
    $("#dialogue").css("color","#fff");

    $("#yo").css("background-color","#fff");
} 
function undarken(){
  var base = "rgb(235, 251, 255)";
    $("#bg").css("background-color","rgba(0,0,0,0)");
    $("#talkbubble").css("background-color",base);
    $("#talkbubble-tri").css("border-color","transparent transparent rgb(235, 251, 255) transparent");
    $("#dialogue").css("color","#000");
    $("#yo").css("background-color",base);
} 
var scenes = {
  0: {
    name:"So you're here!!",
    sprite: me.flowey,
    dialogue: "So you're here!! If you're here, then you must not know about me, huh? Don't worry, I'll teach you all the basics!! Hint: this is an interactive adventure. Use your arrow keys to go to the next page, 'kay? ",
    reply: { ">": 1 }
  },
  1: {
    name: "SO HOO DIS",
    sprite: me.flowey,
    dialogue: "I'm Sophie!! If you didn't know that already. (lol) You can call me whatever though. :Y I'm a huge nird. I eat pizza backward and I like green tea flavored ice cream and ketchup but not together and my pet peeve is when people make an effort to try to close my bedroom door but it flies open anyway. ",
    reply: { ">": 2 }
  },
  2: {
    name: "I LIKE THINGS",
    sprite: me.flowey,
    dialogue: "Currently, I'm in Undertale hell and having a killer time. (sin to win) I also post a ton of birds and puns and just general humor. I'm merciless with puns. Constant vigilance 'n all that. So as you can see... ",
    reply: { ">": 3 },
    callback: undarken
  },
  3: {
    name: "",
    sprite: me.sans,
    dialogue: "I REVEL IN YOUR PAIN",
    reply: { ">": 4 },
    callback: darken
  },
  4: {
    name: "..ful headcanons",
    sprite: me.jk,
    dialogue: "i was kiddin i can't hurt a fly pls be my friend",
    callback: undarken
  },
};