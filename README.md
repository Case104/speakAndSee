# Speak and See
Speak and See is an app that will allow you to speak a word phrase and continually search for matches from flickr.

To use the app launch it on a local server and press the 'Start Search' button. Agree to the permissions autorization prompt, and then you can start speaking. A small pause will deliminate your query into a word or phrase, and then show matches as pictures from the Flickr api.

I decided to start small and tackle this project the simplist way possible. My first step was the check out the Web Speech API documentation and read through the given tutorials. Once I started getting the expected output from that, I moved on to the Flickr api. The documentation there was pretty good, so I managed to put together an api call that gave me the data I needed in a usuable qunanitty. 

I was about to move on to styling when I reread the specifications and noticed that it expected continuous updating. I parked what I had in a branch, and refactored the work into what I needed to satisfy the requirements. After refactoring, I added some basic styling.

I decided to use jQuery in order to run ajax requests as well as simpler DOM targeting and its manipulation methods.
