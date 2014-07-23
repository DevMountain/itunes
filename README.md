DevTunes
========

You now should be to the point where you understand the bigger picture of the iTunes web app that has been show to you throughout the class (tylermcginnis.com/itunes). Tonight, you're going to recreate your own version of it which fetches Artists using the iTunes API.  

The concepts this project will cover are 
1. $http
2. Angular Services
3. Passing a Service into your Controller
4. Working with outside code (ng-grid)


##Step 1: Clone and Dissect the Repo
* Fork and clone this repository.
* Go and check out tylermcginnis.com/itunes. Although that example includes a bunch of filtering options, this project will just be fething data by artist name.
* Examine the codebase. Like the ChatRoom project, the index.html page is already built for you. Your main goal is to fill in mainCtrl.js and itunesService.js
* If you're feeling adventurous, feel free to change the CSS how you would like.
* Head over to http://angular-ui.github.io/ng-grid/ and check out the examples there. We will be using ng-grid to display the data we get from iTunes. Although all this code will already be in place for you, it's a good idea to get familiar with ng-grid so you know exactly what that code is doing.


##Step 2: Build your itunesService
* In Angular we use 'services' to outsource some of our heavy lifting. That's exactly what we're going to do when we call the iTunes API.
* Open up itunesService.js and read the instructions. The bigger picture is that this service is going to havea method which takes in an artist name as the parameter, then uses a JSONP http request to call the iTunes API and retrieve the data about that specific artist.


##Step 3: Tie in your Controller
* Now that your parseService is finished, we somehow need a way to tie the data we're getting from parseService.getData to our scope to show in our view. This sounds like the perfect use case for a controller. 
* Open up mainCtrl.js and follow the instructions. The bigger picture here is that we're going to utilize the methods that we added to parseService to do some of the 'heavy' lifting, then just add what we get back from those methods to the $scope


##Step4: That's it
* If all went well you should be able to open up your index.html page and chat with those who also finished. If you got this far, great job! Review angular promises and $http. They're fundamental to any apps built with Angular.


##Step 5: Black Diamond
* Right now it just shows the message. The object you get back from parse also has a createdAt property. Change the UI to show the message, and what time it was created at in normal, human readable formats. 
* Sign up with parse and create your own private chatroom with your own API keys.
