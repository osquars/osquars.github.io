/**
 * Main AngularJS Web Application
 */
var app = angular.module('pageApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages (Vermintide)
        .when("/vermintide", {templateUrl: "partials/vermintide.html", controller: "PageCtrl"})
        .when("/vermintide/redmooninn", {templateUrl: "partials/vermintide/redmooninn.html", controller: "PageCtrl"})
        .when("/vermintide/characteritemsandstats", {templateUrl: "partials/vermintide/characteritemsandstats.html", controller: "PageCtrl"})
        .when("/vermintide/weaponstats", {templateUrl: "partials/vermintide/weaponstats.html", controller: "weaponCtrl"})
        .when("/vermintide/weapontrinkettraits", {templateUrl: "partials/vermintide/weapontrinkettraits.html", controller: "traitsCtrl"})
        .when("/vermintide/missionitems", {templateUrl: "partials/vermintide/missionitems.html", controller: "PageCtrl"})
        .when("/vermintide/lootandroll", {templateUrl: "partials/vermintide/lootandroll.html", controller: "PageCtrl"})
        .when("/vermintide/skavenenemy", {templateUrl: "partials/vermintide/skavenenemy.html", controller: "PageCtrl"})
        // Pages (Division)
        .when("/division", {templateUrl: "partials/division.html", controller: "PageCtrl"})
        // Blog
        .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
//app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
//    console.log("Blog Controller reporting for duty.");
//});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
//    $('.carousel').carousel({
//        interval: 5000
//    });

    // Activates Tooltips for Social Links
//    $('.tooltip-social').tooltip({
//        selector: "a[data-toggle=tooltip]"
//    })
});

/* Controller for character weapons */
app.controller('weaponCtrl', function($scope, $http) {
    console.log("Weapon Controller reporting for duty.");
    $http.get('assets/json/weapon-stats.json')
        .then(function(response) {
            $scope.weaponList = response.data.weaponList;
            $scope.bwMelee = response.data.bwMelee;
            $scope.bwRange = response.data.bwRange;
            $scope.drMelee = response.data.drMelee;
            $scope.drRange = response.data.drRange;
            $scope.esMelee = response.data.esMelee;
            $scope.esRange = response.data.esRange;
            $scope.wwMelee = response.data.wwMelee;
            $scope.wwRange = response.data.wwRange;
            $scope.whMelee = response.data.whMelee;
            $scope.whRange = response.data.whRange;
        });
});
/* Controller for traits */
app.controller('traitsCtrl', function($scope, $http) {
    console.log("Trait Controller reporting for duty.");
    /*$http.get('assets/json/weapon-stats.json')
        .then(function(response) {
            $scope.weaponList = response.data.weaponList;
            $scope.bwMelee = response.data.bwMelee;
            $scope.bwRange = response.data.bwRange;
            $scope.drMelee = response.data.drMelee;
            $scope.drRange = response.data.drRange;
            $scope.esMelee = response.data.esMelee;
            $scope.esRange = response.data.esRange;
            $scope.wwMelee = response.data.wwMelee;
            $scope.wwRange = response.data.wwRange;
            $scope.whMelee = response.data.whMelee;
            $scope.whRange = response.data.whRange;
        });*/
});