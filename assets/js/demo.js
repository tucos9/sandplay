// Play audio and animate background
var playAudio = function() {
    var myAudio = document.getElementById('audio');
	var myBut   = document.getElementById('play');
    var myBg    = document.getElementsByClassName('hypno')[0];
    if (myAudio.paused) {
        myAudio.play();
		myBut.innerHTML = '<i class="fa fa-pause"></i>';
        myBg.classList.add('animate');
    }
    else {
        myAudio.pause();
		myBut.innerHTML = '<i class="fa fa-play"></i>';
    }
}
document.onLoad += function() {
    var myAudio = document.getElementById('audio');
	var myBut   = document.getElementById('play');
    if (myAudio.paused) {
		myBut.innerHTML = '<i class="fa fa-pause"></i>';
        myBg.classList.add('animate');
    }
    else {
		myBut.innerHTML = '<i class="fa fa-play"></i>';
    }
}
