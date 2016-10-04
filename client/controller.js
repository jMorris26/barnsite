'use strict';

app.controller('submitController', ['$http', '$location', function($http, $location){

  console.log('you are here');
  var vm = this;
  vm.form = {};
  vm.message = '';
  vm.submitClick = function(){
    if(!(vm.form.clientname) || !(vm.form.email) || !(vm.form.message)){
      vm.message = "Required!";
    } else {
      console.log(vm.form);
      $http.post('http://localhost:3000/', vm.form)
        .then(function(response) {
          console.log(response);
          $location.url('http://localhost:8080/#/submit');
        })
        .catch(function(err){
          console.log(err);
        });
    }

  };

}]);
