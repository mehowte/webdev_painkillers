window.onload = function () {
  var webmuses_url = "http://webmus.es";

  var logoColor1 = '#50cdbe';
  var logoColor2 = '#60ddce';
  var logoRadius1 = 65;
  var logoRadius2 = 70;
  var textGlowOpacity1 = 0.0;
  var textGlowOpacity2 = 0.1;
  var textColor = "#fff";
  var animationCycleLength1 = 750;
  var animationCycleLength2 = 1000;


  // This function makes the logo behave like a normal link.
  // i.e. Changes the cursor to pointer and changes the location on click.
  function simulateLink(raphaelObject, url) {
    raphaelObject.click(function(){
      window.location = url;
    });
    raphaelObject.node.setAttribute("style", "cursor: pointer");
  }

  // hmm I wonder if this 'logo' thing have any connection to the one in html file...
  var paper = Raphael('logo', 200, 200);
  Raphael.registerFont( window.caviarDreams );
  Raphael.registerFont( window.lato );


  var circle = paper.circle(100, 100, logoRadius1).attr({ fill : logoColor1, stroke: logoColor1});

  var part1 = paper.print(65, 80, "WEB", paper.getFont("Lato"), 30, 'baseline', 0.2);
  var part2 = paper.print(65, 110, "MUS", paper.getFont("Lato"), 30, 'baseline', 0.2);
  var part3 = paper.print(70, 140, "#", paper.getFont("Lato"), 30, 'baseline');
  var part4 = paper.print(100, 140, "ES", paper.getFont("Lato"), 30, 'baseline', 0.2);


  var part1Glow = part1.glow({color: textColor, opacity: textGlowOpacity1});
  var part2Glow = part2.glow({color: textColor, opacity: textGlowOpacity1});
  var part3Glow = part3.glow({color: textColor, opacity: textGlowOpacity1});
  var part4Glow = part4.glow({color: textColor, opacity: textGlowOpacity1});

  part1.attr({fill: textColor});
  part2.attr({fill: textColor});
  part3.attr({fill: textColor});
  part4.attr({fill: textColor});
  simulateLink(circle, webmuses_url);
  simulateLink(part1, webmuses_url);
  simulateLink(part2, webmuses_url);
  simulateLink(part3, webmuses_url);
  simulateLink(part4, webmuses_url);


  // Creating looped animation is simple. We need to create two functions and make sure
  // they call each other only once at the end of animation.
  //
  // You can try to add more cycles to make more interesting logo animations.
  function animationCycle1() { 
    circle.animate({r: logoRadius1, fill: logoColor1, stroke: logoColor1}, animationCycleLength1, animationCycle2);
    part1Glow.animate({opacity: textGlowOpacity1}, animationCycleLength1);
    part2Glow.animate({opacity: textGlowOpacity1}, animationCycleLength1);
    part3Glow.animate({opacity: textGlowOpacity1}, animationCycleLength1);
    part4Glow.animate({opacity: textGlowOpacity1}, animationCycleLength1);
  }

  function animationCycle2() {
    circle.animate({r: logoRadius2, fill: logoColor2, stroke: logoColor2}, animationCycleLength2, animationCycle1);
    part1Glow.animate({opacity: textGlowOpacity2}, animationCycleLength2);
    part2Glow.animate({opacity: textGlowOpacity2}, animationCycleLength2);
    part3Glow.animate({opacity: textGlowOpacity2}, animationCycleLength2);
    part4Glow.animate({opacity: textGlowOpacity2}, animationCycleLength2);
  }
  animationCycle2();

}

