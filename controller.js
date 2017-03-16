.controller('loginClt', function($scope, $http,$state) {
      // create a blank object to handle form data.
        $scope.login = {};
      // calling our submit function.
        $scope.checkLogin = function() {
        // Posting data to server
        $http({
          method  : 'POST',
          url     : 'http://172.16.1.130:8080/complain/index.php/api/login', // your application method path
          data    : $scope.login, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
           // console.log(data);
            if (data.errors) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } else {
              $scope.message = data.message;
              $state.go('tab.dash'); // redirect to your target path
            }
          })
        }
    })
