var popups = {
  "Terms of Service": `These terms and conditions are here to both protect me as an artist and you (and/or any representatives) as a client. They apply to you when you have commissioned a work from me, and apply to me for the purposes of creating the work, and can be changed when is agreed upon by both parties. They no longer apply when the fees are paid and the work is finished. 
  
TL;DR: this is a formality and i will be lenient on my end but if you have commissioned work from me, you are bound by these rules, please do not abuse them or me; we can make something beautiful if we work together.... 

<b>THE WORK</b>
- The artist maintains that they have the ability to produce the agreed-upon work, and will create an original.
- Approximately 5 revisions are permitted, any additional revisions will incur further fees, to be discussed later.
- The artist retains all rights to the work, including distribution, reproduction, and promotion unless otherwise discussed, but will not reuse the art for commercial gain.
- The client will receive the original completed work and may reupload it with credit, unless otherwise discussed. They are allowed to alter and reuse the work but with credit and not for commercial gain.
- For commercial use, this agreement does not apply. A separate agreement can be drafted in that case.

<b>DEADLINES</b>
- The work must be completed either within one year of the first payment or on a date discussed by the client and artist. 
- If the work is not done by then, the client can consider this a termination of the agreement on the artist's part and request a full refund, if they wish.

<b>COMPENSATION</b>
- Payment will be made before the artist begins working and is due 7 days after agreement to pay, upon which the artist will consider it a premature termination of the agreement. 
- In event that the commission is considered a donation commission, 

<b>TERMINATION</b>
- If the work is not completed (a fact agreed upon by both artist and client) and the client would like to terminate the agreement, they must pay partial compensation at 25% of final price per draft shared. The client will not be entitled to any rights to the work. 
- The artist may terminate the agreement due to any reason and will not be held liable for it; they will provide the client a full refund.
- The work is considered to be accepted if the client does not contact the artist after 7 days.

<b>LEGAL STUFF</b>
- The artist and client maintain a non-exclusive independent contractor relationship. (e.g. The artist may take on new clients without client approval)
- Any losses/damages/liabilities/legal fees, etc incurred as a result of this work is not my obligation, e.g. copyright breach.
- The rules applicable here are under California law and state courts.
- I reserve the right to pursue litigation.
`,
  guidelines: `I reserve the right to refuse any request for any reason, so in addition to the following, please use your best judgement.
  <br />
  
<b>I will not draw:</b>
- offensive content of any kind
- media that i am simply not aesthetically into
  <br />
<b class="title">What's a charity commission?</b>
I don't make money off my art; 100% of the proceeds go to a good cause. In this process we decide on the requisite charity together before work begins. Upon proof of a receipt (or the money if you don't want to donate directly) the commission will be considered paid for. For example, past commission profits have gone to food not bombs, doctors without borders, etc.
`,
};
var options = {
  Sketch: {
    // price: "10+",
    media:
      "https://media.discordapp.net/attachments/721138624615153664/1204703583552151582/image0.jpg?ex=667bcfa4&is=667a7e24&hm=2515fe870391b846bd7862b4d3a61c78bc442c5c0e52ecb57178b03b0daf1769&=&format=webp&width=754&height=1006",
    pivot: "10% 20%",
    desc: "b/w digital pencil render of anything you'd like.",
  },
  "cel shaded": {
    // price: "100",
    pivot: "25% 10%",
    media:
      "https://media.discordapp.net/attachments/721138624615153664/1103471410149593149/image0.jpg?ex=667c0315&is=667ab195&hm=1cefb3335388fbc82a2b3b2a3ef48c28b6a2a3359e934b34598414b12849e94f&=&format=webp&width=701&height=1006",
    desc: `cel shaded character, textures if applicable`,
  },
  "pencil rendered": {
    // price: "100",
    media:
      "https://cdn.discordapp.com/attachments/721138624615153664/1200569337514315929/image0.jpg?ex=667bee93&is=667a9d13&hm=47d7a4f1994ad61198c57f84b68451992321c54467fd37d85bc20ae326e38710&",
    desc: `fully rendered scene of anything you'd like.`,
  },
  Other: {
    // price: "???",
    pivot: "center",
    media:
      "https://cdn.glitch.global/5a41fc45-6453-4780-8000-58f85c2502fc/bugz(1).gif?v=1641534357909",
    desc: "i love entertaining whimsy and i hate boxes! if you have a project outside of these options, i'd be ecstatic to discuss what i can do for you.",
  },
};

var pop_status = false;

$(document).ready(function () {
  for (var option in options) {
    popups[option] =
      options[option].desc +
      "<br/><br/><img src='" +
      options[option].media +
      "'/>";
    var dom = document.createElement("div");

    var bg = document.createElement("div");
    $(bg)
      .addClass("bg")
      .css("background-image", "url('" + options[option].media + "')")
      .css("background-position", options[option].pivot)
      .appendTo($(dom));

    var card = document.createElement("div");

    var title = document.createElement("h1");
    $(title).html(option).appendTo(card);

    if (options[option].price) {
      var price = document.createElement("p");
      $(price).addClass("price").html(options[option].price).appendTo(card);
    }

    //     var desc = document.createElement('p');
    //     $(desc).html(options[option].desc).appendTo(card);

    $(card)
      .addClass("card")
      .css("z-index", "1")
      .css("position", "relative")
      .appendTo($(dom));

    $(dom)
      .addClass("option")
      .prop("id", option)
      .css("position", "relative")
      .click(function () {
        console.log(this);
        popup(this.id);
      })
      .appendTo($("#options"));
  }
});

function popup(key) {
  $("#popup").html("");
  var header = document.createElement("h1");
  $(header).html(key).appendTo($("#popup"));
  var lines = popups[key].split(/\r?\n/);
  for (var i in lines) {
    if (lines[i].length == 0) {
      var desc = document.createElement("br");
      $(desc).appendTo($("#popup"));
    } else {
      var desc = document.createElement("p");
      $(desc).html(lines[i]).appendTo($("#popup"));
      $("#popup").css("opacity", 1).css("pointer-events", "initial");
    }
  }
  var fill = document.createElement("div");
  $(fill)
    .addClass("fill")
    .css("position", "absolute")
    .css("top", "0")
    .css("left", "0")
    .css("width", "100%")
    .css("height", "100%")
    .css("z-index", "99")
    .appendTo($(document.body));

  $(fill).click(function () {
    popdown();
  });
}
function popdown() {
  $("#popup").css("opacity", 0).css("pointer-events", "none");
  $(".fill").remove();
}
