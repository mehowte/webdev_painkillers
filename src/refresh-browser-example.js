window.onload = function () {
  var webmuses_url = "http://webmus.es";
  var logoText = "WEB\nMUS\n#ES"; 

  var logoColor1 = '#40bdae';
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
  var text = paper.print(70, 80, logoText, paper.getFont("Lato"), 30, 'baseline');
  var textGlow = text.glow({color: textColor, opacity: textGlowOpacity1});
  text.attr({fill: textColor});
  simulateLink(circle, webmuses_url);
  simulateLink(text, webmuses_url);


  // Creating looped animation is simple. We need to create two functions and make sure
  // they call each other only once at the end of animation.
  //
  // You can try to add more cycles to make more interesting logo animations.
  function animationCycle1() { 
    circle.animate({r: logoRadius1, fill: logoColor1, stroke: logoColor1}, animationCycleLength1, animationCycle2);
    textGlow.animate({opacity: textGlowOpacity1}, animationCycleLength1);
  }

  function animationCycle2() {
    circle.animate({r: logoRadius2, fill: logoColor2, stroke: logoColor2}, animationCycleLength2, animationCycle1);
    textGlow.animate({opacity: textGlowOpacity2}, animationCycleLength2);
  }
  animationCycle2();

}

