var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){

  var parseSongs = function(songs){
    var finalSongs = [];
    for(var i = 0; i < songs.length; i++){
      var correctData = {};
      correctData['Play'] = songs[i].previewUrl;
      correctData['Song'] = songs[i].trackname;
      correctData['Artist'] = songs[i].artistName;
      correctData['Collection'] = songs[i].collectionName;
      correctData['AlbumArt'] = songs[i].artworkUrl100;
      correctData['Type'] = songs[i].kind;
      correctData['Individual Price'] = songs[i].trackPrice;
      correctData['CollectionPrice'] = songs[i].collectionPrice;
      finalSongs.push(correctData);
    }
    return finalSongs;
  };

  $scope.getSongData = function(){
    $scope.artist = $scope.artist.split(' ').join('');
    itunesService.getSongs($scope.artist)
      .then(function(data){
        $scope.songData = parseSongs(data.data.results)
      });
  }

  $scope.gridOptions = { 
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Song', displayName: 'Song'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'IndividualPrice', displayName: 'Single Price'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };
});




