var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

$('#start-search').click(function(){
	this.textContent = 'Listening';

	var recognition = new SpeechRecognition();
	recognition.lang = 'en-US';

	recognition.start();

	recognition.onresult = function(event){
		recognition.stop();
		$('#start-search').html('Search again!');
		var speechQuery = event.results[0][0].transcript;

		$.ajax({
			url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&format=json&nojsoncallback=1&text=' + speechQuery +'&extras=url_m&per_page=10',
			dataType: 'json'
		}).then(function(response){
			response.photos.photo.forEach(function(photo){
				$('#search-results').prepend("<div class='img-result'><img src='" + photo.url_m + "'</div>");
			});
		});
		
	};
});