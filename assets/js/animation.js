
var herotitle = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 500,
  scale    : 1,
}

var cover = {
  origin   : "bottom",
  distance : "0px",
  duration : 600,
  delay    : 0,
  opacity: 0,
}

var sectitle = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 100,
  scale    : 1,
}


var arrow = {
  origin   : "bottom",
  distance : "64px",
  duration : 900,
  delay    : 1200,
  scale    : 1,
  beforeReveal:function () {
    // $(".freccia").css("opacity","0");
    document.getElementsByClassName("freccia")[0].style.opacity = "0";
  },
  afterReveal: function () {
    document.getElementsByClassName("freccia")[0].style.animation = "freccia 1.6s ease-in-out 5";
    document.getElementsByClassName("freccia")[0].style.opacity = "0";
    // $(".freccia").css({"animation":"freccia 1.6s ease-in-out 5"});
    // $(".freccia").css("opacity","0");
  },
}
