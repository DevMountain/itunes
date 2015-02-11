var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //JSONP is a clever way to work around cross origin restrictions that browsers place on API calls. To use it, make sure you use the url as shown above and make sure you use 'JSONP' as your method in the $http call
  //Also note that in the above line that shows the URL, artist is the parameter that's being combined with the itunes string to create a dynamic url. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
});
