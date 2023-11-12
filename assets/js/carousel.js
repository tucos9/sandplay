
  /* both carousels have 4 slides */
var maxstep = 3;

var initBullets = function() {
  var bullets = document.getElementsByClassName('slide-bullet');
  for (var i = 0; i < bullets.length; i++ ) {
    bullets[i].addEventListener('click', rotateDiv2(i, 'slider-bottom', 9000));
  }
}

var rotateDiv = function(step, div_id, timeout) {
  var divs = document.getElementById(div_id).getElementsByClassName("slide");
  for (var i = 0; i < divs.length; i++ ) {
    var div = divs[i];
    if (div.id != "") {
      if (i != step) {
        div.style.opacity = "0";
      }
      else {
        div.style.opacity = "1";
      }
    }
  }
  setTimeout(showNext, timeout, step, div_id, timeout);
}

var showNext = function(step, div_id, timeout) {
  if (step < maxstep) {
    step++;
  }
  else {
    step = 0;
  }

  rotateDiv(step, div_id, timeout);
}

var rotateDiv2 = function(step, div_id, timeout) {
  var divs = document.getElementById(div_id).getElementsByClassName("slide");
  for (var i = 0; i < divs.length; i++ ) {
    var div = divs[i];
    if (div.id != "") {
      if (i != step) {
        div.style.opacity = "0";
      }
      else {
        div.style.opacity = "1";
      }
    }
  }
  setTimeout(showNext2, timeout, step, div_id, timeout);
}

var showNext2 = function(step, div_id, timeout) {
  if (step < maxstep) {
    step++;
  }
  else {
    step = 0;
  }

  rotateDiv2(step, div_id, timeout);
}

var startCarousel = function() {
  initBullets();

  showNext(-1, 'slider-top', 4500);
  showNext2(-1, 'slider-bottom', 9000);
}

document.onload = startCarousel();
