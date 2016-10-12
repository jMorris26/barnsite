'use strict';

// $(document).ready(function(){
// 	$('a[href^="#"]').on('click',function (e) {
// 			e.preventDefault();
//
// 			var target = this.hash;
// 			var $target = $(target);
//
// 			$('html, body').stop().animate({
// 					'scrollTop': $target.offset().top
// 			}, 900, 'swing', function () {
// 					window.location.hash = target;
// 			});
// 	});
// });



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
