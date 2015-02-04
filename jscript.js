$(document).ready(function() {
  $("#button1").on("click", function() {
    $("#container").find("div").remove();
    var sides = prompt("Choose a number between 1 and 64");
    if (sides >=1 && sides <= 64) {
      var bigBox = sides*sides;
      for (var i=0;i<bigBox;i++) {
        $("#container").append("<div></div>");
      };
      $("#container > div").addClass("small");
      $("#container > div").css({"height":("800"/sides)-2, "width":("800"/sides)-2});
      $(".small").on("mouseenter", function() {
        $(this).removeClass("oldColor");
        $(this).addClass("newColor");
      });
      $(".small").on("click", function() {
        $(this).removeClass("newColor");
        $(this).addClass("oldColor");
      });
    }
    else {
      alert("You didn't do what I told you to do.");
    }
  });
  $("#button2").on("click", function() {
    $("#container").find("div").remove();
    var sides = prompt("Choose a number between 1 and 64");
    if (sides >=1 && sides <= 64) {
      var bigBox = sides*sides;
      for (var i=0;i<bigBox;i++) {
        $("#container").append("<div></div>");
      };
      $("#container > div").addClass("small2");
      $("#container > div").css({"height":("800"/sides)-2, "width":("800"/sides)-2});
      $(".small2").on("mouseenter", function() {
        var color1 = Math.floor((Math.random() * 255) + 1);
        var color2 = Math.floor((Math.random() * 255) + 1);
        var color3 = Math.floor((Math.random() * 255) + 1);
        $(this).css({"background-color":"rgb(" + color1 + "," + color2 + "," + color3 + ")"});
      });
      $(".small2").on("click", function() {
        $(this).css({"background-color":"white"});
      });
    }
    else {
      alert("You didn't do what I told you to do.");
    }
  });
  $("#button3").on("click", function() {
    $("#container").find("div").remove();
    var sides = prompt("Choose a number between 1 and 64");
    if (sides >=1 && sides <= 64) {
      var bigBox = sides*sides;
      for (var i=0;i<bigBox;i++) {
        $("#container").append("<div></div>");
      };
      $("#container > div").addClass("small3");
      $("#container > div").css({"height":("800"/sides)-2, "width":("800"/sides)-2});
      $(".small3").on("mouseenter", function() {
        $(this).animate({"opacity":"0"},"100");
      });
      $(".small3").on("mouseleave", function() {
        $(this).animate({"opacity":"1"},"800");
      });
    }
    else {
      alert("You didn't do what I told you to do.");
    }
  });
});


