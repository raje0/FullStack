angular.module('geolocationApp', [])
    .controller('GeolocationController', function($scope) {

        $scope.latitude = null;
        $scope.longitude = null;
        $scope.errorMessage = null;

      
        $scope.getLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                   
                    $scope.latitude = position.coords.latitude;
                    $scope.longitude = position.coords.longitude;

                   
                    $scope.errorMessage = null;
                    
                
                    $scope.$apply();
                }, function(error) {
                   
                    $scope.errorMessage = "Unable to retrieve your location. Please try again.";
                    $scope.latitude = null;
                    $scope.longitude = null;
                    
                  
                    $scope.$apply();
                });
            } else {
           
                $scope.errorMessage = "Geolocation is not supported by this browser.";
                $scope.latitude = null;
                $scope.longitude = null;
                $scope.$apply();
            }
        };

    });
