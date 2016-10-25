angular.module('itunes').controller('mainCtrl', function($scope, itunesService){
  //This is setting up the default behavior of our ng-grid. The important thing to note is the 'data' property. The value is 'songData'. That means ng-grid is looking for songData on $scope and is putting whatever songData is into the grid.
  //This means when you make your iTunes request, you'll need to get back the information, parse it accordingly, then set it to songData on the scope -> $scope.songData = ...
  $scope.gridOptions = { 
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };

  //Our controller is what's going to connect our 'heavy lifting' itunesService with our view (index.html) so our user can see the results they get back from itunes.

  //First inject itunesService into your controller.


  //Now write a function that will call the method on the itunesService that is responsible for getting the data from iTunes, whenever the user clicks the submit button
  //*remember, that method should be expecting an artist name. The artist name is coming from the input box on index.html, head over there and check if that input box is tied to any specific model we could use.
  //Also note that that method should be retuning a promise, so you could use .then in this function. 
    
    //Code here
  



  //Check that the above method is working by entering a name into the input field on your web app, and then console.log the result.




  //If everything worked you should see a huge array of objects inside your console. That's great! But unfortunately that's not what ng-grid is expecting. What you need to do now is sort the data you got back. This sounds like a great job for a service! Head back to your itunesService and complete the last instructions there. 
  

    



  //Now that your service is doing the heavy lifting (sorting/formatting), we can now put the result of calling that method onto $scope.songData so that ng-grid will find it and populate the page.



});




