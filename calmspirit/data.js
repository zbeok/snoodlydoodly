var bgs = {
  "park": "./assets/park.png",
  "woods": "./assets/woods.png",
  "woods_dark": "./assets/woods-dark.png",
  "cafe": "./assets/cafe.png",
  "coffee": "./assets/coffee.png",
  "space": "./assets/space.png",
}
var sil = {
  "normal": "./assets/sil.png",
  "half": "./assets/sil-1.png",
  "closed": "./assets/sil-2.png",
}
var calem = {
  "normal": "./assets/calem-normal.png",
  "blink": "./assets/calem-blink.png",
  "flustered": "./assets/calem-flustered.png",
  "embarassed": "./assets/calem-embarassed.png",
  "sheepish": "./assets/calem-sheepish.png",
  "happy": "./assets/calem-happy.png",
  "dark": "./assets/calem-dark.png",
  "wtf": "./assets/calem-wtf.png",
  "omg": "./assets/calem-omg.png",
}

var waitress = {
  "normal": "./assets/waitress.png",
}
var scenes = {
  0: {
    name: "phi",
    sprite: false,
    bg: false,
    dialogue: "12/30/2021 - This was written for a friend a long time ago. \
it was done out of love and admiration. \
Please be kind - I know it's not very good but it's full of \
good memories that I think is worth cherishing. \
I revamped this UI out of love.\
In the same spirit of things, please feel free to enjoy this little game \
I made in high school.",
    reply: { "Let's start!": 1 }
  },
  1: {
    name: "Calem",
    sprite: calem.normal,
    bg: bgs.park,
    dialogue: "H-hi! Haven't seen you in a while!",
    reply: { "Oh, same": 2 }
  },
  2: {
    name: "Calem",
    sprite: calem.flustered,
    bg: bgs.park,
    dialogue: "It's nice to see you again, you know, after all that... stuff.",
    reply: { "Sure, whatever.": 3, "You mean when I beat you? Heh.": 2.5 }
  },
  2.5: {
    name: "Calem",
    sprite: calem.dark,
    bg: bgs.park,
    dialogue: "Shut up",
    reply: { Hehehehe: 3 }
  },
  3: {
    name: "Calem",
    sprite: calem.normal,
    bg: bgs.park,
    dialogue:
      "Anyway, I just wanted to say... Happy birthday. It is your birthday, right?~",
    reply: { "How did you know?": 4 }
  },
  4: {
    name: "Calem",
    sprite: calem.dark,
    bg: bgs.park,
    dialogue: "Calem: Reasons.....",
    reply: { "...........": 5 }
  },
  5: {
    name: "Calem",
    sprite: calem.flustered,
    bg: bgs.park,
    dialogue: "Anyway....",
    reply: { "???": 6 }
  },
  6: {
    name: "Calem",
    sprite: calem.embarassed,
    bg: bgs.park,
    dialogue: "D-do you think... er......",
    reply: { "???????????": 7 }
  },
  7: {
    name: "Calem",
    sprite: calem.sheepish,
    bg: bgs.park,
    dialogue: "doyouwannagotothecafeforaseci'lltellyouthere",
    reply: {
      "Ok....????": 8,
      "Who, with you? Why would I do THAT? .... fine, since I'm curious.": 8
    }
  },
  8: {
    name: "Calem",
    sprite: calem.blink,
    bg: bgs.park,
    dialogue: "Great! I'll see you there, then! Don't forget!!",
    reply: { "Well, no helping it then. Time to go to the cafe...": 9 }
  },
  9: {
    name: "Calem",
    sprite: calem.flustered,
    bg: bgs.cafe,
    dialogue: "So.......... Sorry for calling you here all of a sudden....",
    reply: { "It's fine. But what were you going to say?": 10 }
  },
  10: {
    name: "Calem",
    sprite: calem.embarassed,
    bg: bgs.cafe,
    dialogue: "I-- oh, waitress.",
    reply: { "Let's order first.": 11 }
  },
  11: {
    name: "Waitress",
    sprite: waitress.normal,
    bg: bgs.cafe,
    dialogue: "I'm ready to take your order!",
    reply: { "Ah, I'd like a coffee.": 11.1, "Ah, I'd like tea.": 12 }
  },
  11.1: {
    name: "Calem",
    sprite: calem.wtf,
    bg: bgs.cafe,
    dialogue: "What, you like coffee?! Tea's obviously better!!",
    reply: { "No way!!": 11.2 }
  },
  11.2: {
    sprite: false,
    bg: bgs.coffee,
    dialogue:
      "...And then you proceeded to argue about tea and coffee, \
and you never got to hear what he had to say.",
    reply: { "BAD END": 0 }
  },
  12: {
    name: "Calem",
    sprite: calem.embarassed,
    bg: bgs.cafe,
    dialogue: "T-tea for me, too, please!",
    reply: { "Nice choice": 13 }
  },
  13: {
    name: "Waitress",
    sprite: waitress.normal,
    bg: bgs.cafe,
    dialogue: "Alright, I'll come back with your order. *leaves*",
    reply: { "Calm down, dude.": 14 }
  },

  14: {
    name: "Calem",
    sprite: calem.embarassed,
    bg: bgs.cafe,
    dialogue: "H-hahaha... um...",
    reply: { "Oh, just get to the point. What is it?": 15 }
  },

  15: {
    name: "Calem",
    sprite: calem.flustered,
    bg: bgs.cafe,
    dialogue: "I haven't seen you in a while.... remember when we were rivals?",
    reply: {
      "Yeah. But that doesn't have anything to do with your blushing, mm?~": 16
    }
  },
  16: {
    name: "Calem",
    sprite: calem.embarassed,
    bg: bgs.cafe,
    dialogue: "Shut up!!",
    reply: { "I find it cute, actually~": 16.1, ".... alright.... ": 17 }
  },

  16.1: {
    name: "Calem",
    sprite: calem.oof,
    bg: bgs.cafe,
    dialogue: "O-oh... that was not good for my health..",
    reply: { "Calem?! Hang in there!!": 16.2 }
  },

  16.2: {
    sprite: false,
    bg: bgs.space,
    dialogue: "...And then, he fainted.",
    reply: { "BAD END": 0 }
  },

  17: {
    name: "Calem",
    sprite: calem.flustered,
    bg: bgs.cafe,
    dialogue: "I.... I just wanted to say...............",
    reply: { "*anticipation*": 18 }
  },

  18: {
    name: "Calem",
    sprite: calem.embarassed,
    bg: bgs.cafe,
    dialogue: "ilikeyou",
    reply: { "haha what a nerd": 18.1, "I.... I like you too.": 19 }
  },

  18.1: {
    name: "Calem",
    sprite: calem.omg,
    bg: bgs.cafe,
    dialogue: ";A;",
    reply: { "sorry sucker": 18.2 }
  },

  18.2: {
    sprite: false,
    bg: bgs.cafe,
    dialogue:
      "...And then, you put on your sunglasses. And leave him heartbroken.",
    reply: { "BAD END": 0 }
  },

  19: {
    name: "Calem",
    sprite: calem.happy,
    bg: bgs.cafe,
    dialogue: "So I was worried for nothing then, huh? Haha!",
    reply: { ":)": 20 }
  },
  20: {
    sprite: calem.happy,
    bg: bgs.cafe,
    dialogue:
      "And then, you guys started going out \
(and you still beat him in Pokemon battles all the time) \
and became the really stereotypically lovey dovey couple. Congratulations!",
    reply: { "GOOD END!": 0 }
  },
  "s1": {
    sprite: sil.normal,
    name: "Sil",
    bg: bgs.park,
    dialogue: "...",
    reply: { "->": "s2" }
  },
  "s2": {
    sprite: sil.half,
    name: "Sil",
    bg: bgs.woods,
    dialogue: ".........................",
    reply: { "->": "s3" }
  },
  "s3": {
    sprite: sil.closed,
    name: "THE END",
    bg: bgs.woods_dark,
    dialogue: "",
    reply: { "restart": "0" }
  }
};