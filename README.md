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
* Go and check out http://tylermcginnis.com/itunes. Although that example includes a bunch of filtering options, this project will just be fetching data by artist name.
* Examine the codebase. Like the ChatRoom project, the index.html page is already built for you. Your main goal is to fill in mainCtrl.js and itunesService.js
* If you're feeling adventurous, feel free to change the CSS how you would like.
* Head over to http://angular-ui.github.io/ng-grid/ and check out the examples there. We will be using ng-grid to display the data we get from iTunes. Although all this code will already be in place for you, it's a good idea to get familiar with ng-grid so you know exactly what that code is doing.


##Step 2: Build your itunesService
* In Angular we use 'services' to outsource some of our heavy lifting. That's exactly what we're going to do when we call the iTunes API.
* Open up itunesService.js and read the instructions. The bigger picture is that this service is going to have a method which takes in an artist name as the parameter, then uses a JSONP http request to call the iTunes API and retrieve the data about that specific artist.


##Step 3: Tie in your Controller
* Now that your itunesService is finished, we somehow need a way to tie the data we're getting from itunesService to our view (index.html)
* Go to mainCtrl.js and follow the instructions in order to get the itunes data from your service to your view


##Step 4: Add More Options
* Go back and look at the original data you're getting from iTunes. There is a lot more that you can play around with...
* Add more columns to ng-grid so the user can see more options
* Add a filtering option so they can filter by price, name, etc etc.
* Also add a options dropdown so they can select which type of data they want from iTunes. Artist, song, movie, etc.(In other words, make it exactly like http://tylermcginnis.com/itunes)



##BLACK DIAMOND
In this project, the data was brought into the controller, and the controller was responsible for "massaging" the data (making it look nice, getting what it needed etc) for the view. This works, because the point of a service is to help multiple controllers (each controller could manipulate the data as it needed). However, if multiple controllers needed the same data, it would make sense to "massage" (clean up) the data before sending, wouldn't it?

OPTION 1 and 2:

* Option 1: Make your controller skinnier by cleaning up the data before sending it to your controller. (Take the work you've done on your controller, and put this into your service, before returning the data to your controller.)

* Option 2: Your service has a service!  Create a service that does the work your controller was doing, and inject this dependency into your current service.  Have it do to the work!
