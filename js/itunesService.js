angular.module('itunes').service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.
this.getArtist = function(artist){
  var deferred = $q.defer();
  $http({
    method:"JSONP",
    url:'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  }).then(function(response) {
    var parseResponse = response.data.results;
    console.log(response);
    var songArray = [];
    for (var i = 0; i < parseResponse.length; i++){
      songArray.push({
        AlbumArt: parseResponse[i].artworkUrl100,
        Artist: parseResponse[i].artistName,
        Collection: parseResponse[i].collectionName,
        CollectionPrice: parseResponse[i].trackPrice,
        Play: parseResponse[i].previewUrl,
        Type: parseResponse[i].wrapperType,
        Genre: parseResponse[i].primaryGenreName,

      })
    }
  deferred.resolve(songArray);
  console.log("this is the song array" + songArray);
  })
  return deferred.promise;
}

    //Code here

});
