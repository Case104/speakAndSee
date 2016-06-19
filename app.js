$(document).ready(function(){

	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	recognition.lang = 'en-US';
	recognition.continuous = true;

	$('#start-search').click(function(){
		var resultIndex = 0;

		recognition.start();

		recognition.onresult = function(event){
			var speechQuery = event.results[resultIndex][0].transcript;
			resultIndex += 1;

			$.ajax({
				url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&format=json&nojsoncallback=1&text=' + speechQuery +'&extras=url_m&per_page=3',
				dataType: 'json'
			}).then(function(response){
				response.photos.photo.forEach(function(photo){
					$('#search-results').prepend("<div class='img-result'><img src='" + photo.url_m + "'</div>");
				});
			});
			
		};

		$('#end-search').click(function(){
			recognition.stop();
		});

	});

});