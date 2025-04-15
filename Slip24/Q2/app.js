angular.module('validationApp', [])
    .controller('ValidationController', function($scope) {

        $scope.username = '';
        $scope.password = '';
        $scope.usernameValid = false;

      
        $scope.validateUser = function() {
        
            if (!$scope.username) {
                alert("Enter username");
                return;
            } else if ($scope.username.length < 3) {
                alert("Username is too short");
                return;
            } else {
                $scope.usernameValid = true;
            }  
            if ($scope.password.length < 8) {
                alert("Password must be at least 8 characters long");
                return;
            }
            alert("Form Submitted Successfully!");
        };
    });
