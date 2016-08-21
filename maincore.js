if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
       
}


    window.onload = function() {
    top.document.title = "Beats1 - ▶";
    music.load();
    music.play();
    if (music.paused) {
		PlayButton.className = "";
		PlayButton.className = "play";
		top.document.title = "Beats1 - ▌▌";
       }
}


	music.onsuspend=function(){
	if (PlayButton.className == "pause") {
	top.document.title = "  Beats1 - ▶";
	//music.load();
	//music.play();
	location.reload();
	} else {
	music.load();
	music.pause();
	PlayButton.className == "play"
	top.document.title = "  Beats1 - ▌▌";
	};
	
}



//Play and Pause
function play() {
	// start music
	if (music.paused) {
		music.load();
		music.play();
		// remove play, add pause
		PlayButton.className = "";
		PlayButton.className = "pause";
		top.document.title = "Beats1 - ?";
	} else { // pause music
		music.pause();
		// remove pause, add play
		PlayButton.className = "";
		PlayButton.className = "play";
		
		top.document.title = "Beats1 - ��";

	}
}
