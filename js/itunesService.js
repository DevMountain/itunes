var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  this.getSongs = function(artist){
    return $http({
      method: 'JSONP',
      url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    })
  }
});