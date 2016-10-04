'use strict';

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
					'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
					window.location.hash = target;
			});
	});
});

$(document).ready(function() {
	$('.galleryimg').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
	});
});



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
