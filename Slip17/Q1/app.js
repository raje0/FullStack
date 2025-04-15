var app = angular.module("mscApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html"
    })
    .when("/ds", {
      templateUrl: "partials/ds.html"
    })
    .when("/cn", {
      templateUrl: "partials/cn.html"
    })
    .when("/os", {
      templateUrl: "partials/os.html"
    })
    .when("/ai", {
      templateUrl: "partials/ai.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});
