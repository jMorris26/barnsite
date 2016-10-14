'use strict';

app.controller('submitController', ['$http', '$location', function($http, $location){

  console.log('you are here');
  var vm = this;
  vm.form = {};
  vm.message = '';
  vm.submitClick = function(path){
    if(!(vm.form.clientname) || !(vm.form.email) || !(vm.form.message)){
      vm.message = "Required!";
    } else {
      console.log(vm.form);
      $http.post('https://sunrise-equine.herokuapp.com' + path, vm.form)
        .then(function(response) {
          console.log(response);
          $location.url(path);
        })
        .catch(function(err){
          console.log(err);
        });
    }

  };

}]);


app.directive('gallery', [function(){
  return {
    templateUrl: 'partials/gallery.html',
    link: function() {
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
    }
  };
}]);

app.directive('enter', [function(){
  return {
    templateUrl: 'partials/enter.html',
    link: function(){
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
    }
  };
}]);
