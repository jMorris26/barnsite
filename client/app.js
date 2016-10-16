'use strict';

var app = angular.module('barn', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/allcontent.html'
	})
	.when('/about', {
		templateUrl: 'partials/about.html'
	})
	.when('/gallery', {
		templateUrl: 'partials/gallery.html'
	})
	.when('/contact', {
		templateUrl: 'partials/contact.html'
	})
	.when('/submit', {
		templateUrl: 'partials/submit.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
