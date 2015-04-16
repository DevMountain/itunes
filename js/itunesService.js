var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here

    this.artistInfo = function(artist) {
    	var defer = $q.defer();
    	$http({
    		method: 'JSONP',
    		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    	 }).then(function(response) {
    	 	//wconsole.log(response)
    	 	response = response.data.results
    	 	var arr = []
    	 	for (var i = 0; i < response.length; i++) {
    	 		var obj = {
    	 			AlbumArt: response[i].artistUrl30,
    	 			Artist: response[i].artistName,
    	 			Collection: response[i].collectionName,
    	 			CollectionPrice: response[i].collectionPrice,
    	 			Play: response[i].previewUrl,
    	 			Type: response[i].kind
    	 		}
    	 		arr.push(obj);



    	 	};
    		defer.resolve(arr)
    	 })
    	 return defer.promise
    }


});


