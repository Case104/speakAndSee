var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

$('#start-search').click(function(){
	this.textContent = 'Listening';

	var recognition = new SpeechRecognition();
	recognition.lang = 'en-US';

	recognition.start();

	recognition.onresult = function(event){
		recognition.stop();
		$('#start-search').html('Search again!');
		speechQuery = event.results[0][0].transcript;

		
	}

})