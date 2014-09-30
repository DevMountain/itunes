var app = angular.module('myDirectives', []);

app.directive('pending', function($q){
	return {
		restrict: 'A',
		scope: {
			doIt: '&'
		},
		link: function(scope, elem, attrs){
			var spinner = angular.element("<button class='btn disabled'><i class='icon-refresh icon-spin'></i> Doing...</button>").hide();
			elem.after(spinner);

			elem.click(function(){
				spinner.show();
				elem.hide();
				getData()
					.then(function(data){
						spinner.hide();
						elem.show();
					})
			});

			var getData = function(){
				var deferred = $q.defer();
				scope.doIt()
					.then(function(data){
						deferred.resolve(data)
					});
				return deferred.promise;
			}
		}
	}
});

app.directive('notify', function($window){
	return{
		restrict: 'A',
		scope: {
			title: '=',
			message: '=',
			icon: '='
		}
		link: function(scope, elem, attrs, ctrl){

	var Notification = window.Notification || window.mozNotification || window.webkitNotification;

	Notification.requestPermission(function (permission) {
		console.log(permission);
	});

	function show() {
		var instance = new Notification("This THing", { body: "Hello" });

		instance.onclick = function () {
			// Something to do
		};
		instance.onerror = function () {
			// Something to do
		};
		instance.onshow = function () {
			// Something to do
		};
		instance.onclose = function () {
			// Something to do
		};

		return false;
	}
			elem.click(function(){
				debugger;
				return show();
			});
		}
	}
});