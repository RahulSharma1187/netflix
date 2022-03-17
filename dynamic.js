(function () {

    const URL = "https://raw.githubusercontent.com/RahulSharma1187/netflix/main/dynamic.json";

    var videoId;
	var minutes;
	var seconds;

    async function init() {

        let response = await fetch(URL);
		let data = await response.json();
		console.log(data);
		videoId = data.videoId;
		minutes = data.minutes;
		seconds = data.seconds;		

		console.log(seconds)
		
		$('body').append(`<div class="netflix-customTimePopup"><h2>Custom Div!</h2><div id="netflixClosePopupCustom" class="netflixClosePopupCustom">X</div></div>`)
		
		setTimeout(() => {
			setInterval(() => {
				myFun();
			}, 100);
		}, 10000);

	}

	init();

    $('html').on('click','.netflixClosePopupCustom', function(){
		$('.netflix-customTimePopup').hide();
    })


    function myFun(){
		var getVideoId = $('.watch-video').find('.ltr-gwjau2-playerCss').attr('data-videoid');
		var vid = document.getElementsByTagName("video")[0];
		var time = vid.currentTime; 
		var getminutes = Math.floor(time / 60); 
		var getseconds = Math.floor(time); 

		console.log('getminutes ' + getminutes)
		console.log('getseconds ' + getseconds)

		if(getVideoId == videoId && getminutes == minutes && getseconds == seconds ){
			$('.netflix-customTimePopup').css('display', 'flex');
		}
	}
    
})();