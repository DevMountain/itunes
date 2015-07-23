var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to 
  // manipulate the data before you resolve it.
  //Code here

    this.getData = function(artist){
    var deferred = $q.defer();	
    $http({
        method: 'JSONP',
       	url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK' })
	.then(function(response) {   
    // get to the good stuff in the object that is returned. 
     var data = response.data.results;
     // console.log(data);
     var newData = [];
     // loop through the array, getting the proper keys of each object. 
     var i;


     function capThis(str) {
          var modName = str.charAt(0).toUpperCase() + str.slice(1);
          if (modName.indexOf("-")) {
            var pos = modName.indexOf("-");
            console.log(pos);
            modName.replace("-", " ");
            modName = modName.charAt(pos + 1).toUpperCase() + modName.slice(pos + 2);
          }
        return modName;
      };
      capThis("feature-movie");

     //console.log(data);
     // loop through the data array, to get to each object
     for (i = 0; i < data.length; i++) {
      //declare a new object
      var newObj = {};
      // add the appropriate keys to a new array from each object in data
       for ( key in data[i] ) {
          newObj.AlbumArt = data[i].artworkUrl60;
          newObj.Artist = data[i].artistName;
          newObj.Collection = data[i].collectionName;
          newObj.Song = data[i].trackName;
          newObj.SinglePrice = "$" + data[i].trackPrice;
          newObj.CollectionPrice = "$" + data[i].collectionPrice.toFixed(2);
          newObj.Play = data[i].previewUrl;
          newObj.Type = capThis(data[i].kind);

       }
       // push to a new array
       newData.push(newObj);
     }
     //console.log(newData);
    deferred.resolve(newData);
    })
    return deferred.promise;
  };
//Check that the above method is working by entering a name into the input field on your web app, 
  //and then console.log the result

    //Code here
    


  //If everything worked you should see a huge array of objects inside your console. That's great! 
  // But unfortunately that's not what ng-grid is expecting. What you need to do now
  //is sort the data you got back to be an object in the following format.
    /*
      AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
      Artist: "Nelly"
      Collection: "Nellyville"
      CollectionPrice: 11.99
      Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
      Type: "song"
  */
  //the iTunes API is going to give you a lot more details than ng-grid wants. Create a new array 
  // and then loop through the iTunes data pushing into your new array objects that look like the 
  //above data.

    //Code here






// close app.service call
});