'use strict';

var app = angular.module('barn', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/allcontent.html'
	})
	.when('/submit', {
		templateUrl: 'partials/submit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
