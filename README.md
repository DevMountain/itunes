iTunes Angular Clone
========

### Learning Objectives (Students will…):
  - be able to make $http requests to various APIs
  - be able to use outside directives and know how to inject those modules into their application
  - be able to create, return, and resolve their own promises with $q


You now should be to the point where you understand the bigger picture of the iTunes web app that has been show to you throughout the class (http://tylermcginnis.com/itunes). Tonight, you're going to recreate your own version of it which fetches Artists using the iTunes API.  

The concepts this project will cover are 
1. $http
2. Angular Services
3. Passing a Service into your Controller
4. Working with outside code (ng-grid)


##Step 1: Clone and Dissect the Repo
* Fork and clone this repository.
* Go and check out http://tylermcginnis.com/itunes. Although that example includes a bunch of filtering options, this project will just be fething data by artist name.
* Examine the codebase. Like the ChatRoom project, the index.html page is already built for you. Your main goal is to fill in mainCtrl.js and itunesService.js
* If you're feeling adventurous, feel free to change the CSS how you would like.
* Head over to http://angular-ui.github.io/ng-grid/ and check out the examples there. We will be using ng-grid to display the data we get from iTunes. Although all this code will already be in place for you, it's a good idea to get familiar with ng-grid so you know exactly what that code is doing.


##Step 2: Build your itunesService
* In Angular we use 'services' to outsource some of our heavy lifting. That's exactly what we're going to do when we call the iTunes API.
* Open up itunesService.js and read the instructions. The bigger picture is that this service is going to have a method which takes in an artist name as the parameter, then uses a JSONP http request to call the iTunes API and retrieve the data about that specific artist.


##Step 3: Tie in your Controller
* Now that your itunesService is finished, we somehow need a way to tie the data we're getting from itunesService to our view (index.html)

Our controller is what's going to connect our 'heavy lifting' itunesService with our view (index.html) so our user can see the results they get back from itunes.

* First inject itunesService into your controller.
* Now write a function that will call the method on the itunesService that is responsible for getting the data from iTunes, whenever the user clicks the submit button (*remember, that method should be expecting an artist name. The artist name is coming from the input box on index.html, head over there and check if that input box is tied to any specific model we could use*).
* Also note that that method should be retuning a promise, so you could use .then in this function.
* Check that the above method is working by entering a name into the input field on your web app, and then console.log the result

If everything worked you should see a huge array of objects inside your console. That's great! But unfortunately that's not what ng-grid is expecting. What you need to do now is sort the data you got back to be an object in the following format.

```
      AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
      Artist: "Nelly"
      Collection: "Nellyville"
      CollectionPrice: 11.99
      Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
      Type: "song"
```

The iTunes API is going to give you a lot more details than ng-grid wants. Create a new array and then loop through the iTunes data pushing into your new array objects that look like the above data.

Once you have that final data array, you simply need to put it on the scope (or more specifically on the scope as songData). Once you do this ($scope.songData = myFinalArray) then ng-grid will see that and populate the page.

##Step 4: Add More Options
* Go back and look at the original data you're getting from iTunes. There is a lot more that you can play around with...
* Add more columns to ng-grid so the user can see more options
* Add a filtering option so they can filter by price, name, etc etc.
* Also add a options dropdown so they can select which type of data they want from iTunes. Artist, song, movie, etc.(In other words, make it exactly like http://tylermcginnis.com/itunes)
