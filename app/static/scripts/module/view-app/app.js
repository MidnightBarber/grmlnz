angular.module("grmlnz", ["ngRoute", "door3.css", "grmlnzControllers"])

.controller("mainController", ["$scope", "$css", function($scope, $css){
    $css.bind({
        href: "static/styles/stylesheet.css"
    }, $scope);
}])

.config(["$routeProvider", "$locationProvider",  function($routeProvider, $locationProvider){
            $routeProvider.when("/", {
                templateUrl: "static/scripts/module/view-app/partials/index.html",
                controller: "indexPageController"
            })
            .when("/index", {
                templateUrl: "static/scripts/module/view-app/partials/index.html",
                controller: "indexPageController"
            })
            .when("/music", {
                templateUrl: "static/scripts/module/view-app/partials/music.html",
                controller: "musicPageController"
            })
            .when("/calendar", {
                templateUrl: "static/scripts/module/view-app/partials/calendar.html",
                controller: "calendarPageController"
            })
            .when("/bio", {
                templateUrl: "static/scripts/module/view-app/partials/bio.html",
                controller: "bioPageController"
            })
            .when("/contact", {
                templateUrl: "static/scripts/module/view-app/partials/contact.html",
                controller: "contactPageController"
            });
            
            $locationProvider.html5Mode(true);
}]);
