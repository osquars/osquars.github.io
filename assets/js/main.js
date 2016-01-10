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
        .when("/vermintide/weaponstats", {templateUrl: "partials/vermintide/weaponstats.html", controller: "PageCtrl"})
        .when("/vermintide/link1", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
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