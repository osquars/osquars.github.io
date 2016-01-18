/**
 * Main AngularJS Web Application
 */
var app = angular.module('pageApp', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    // Home
        .when("/", {
            title: "Home",
            templateUrl: "partials/home.html",
            controller: "PageCtrl"
        })
        // Pages (Blood Moon Inn)
        .when("/bloodmooninn", {
            title: "Blood Moon Inn",
            templateUrl: "partials/bloodmooninn.html",
            controller: "BlogCtrl"
        })
        .when("/bloodmooninn/serverrules", {
            title: "Blood Moon Inn",
            templateUrl: "partials/bloodmooninn/serverrules.html",
            controller: "BlogCtrl"
        })
        // Pages (Vermintide)
        .when("/vermintide", {
            title: "Warhammer: The End Times - Vermintide",
            templateUrl: "partials/vermintide.html",
            controller: "PageCtrl"
        })
        .when("/vermintide/redmooninn", {
            title: "Red Moon Inn",
            templateUrl: "partials/vermintide/redmooninn.html",
            controller: "PageCtrl"
        })
        .when("/vermintide/characteritemsandstats", {
            title: "Character Items and Stats",
            templateUrl: "partials/vermintide/characteritemsandstats.html",
            controller: "PageCtrl"
        })
        .when("/vermintide/weaponstats", {
            title: "Weapon Stats",
            templateUrl: "partials/vermintide/weaponstats.html",
            controller: "weaponCtrl"
        })
        .when("/vermintide/weapontrinkettraits", {
            title: "Weapon and Trinket Traits",
            templateUrl: "partials/vermintide/weapontrinkettraits.html",
            controller: "traitCtrl"
        })
        .when("/vermintide/missionitems", {
            title: "Mission Items",
            templateUrl: "partials/vermintide/missionitems.html",
            controller: "PageCtrl"
        })
        .when("/vermintide/lootandroll", {
            title: "Loot and Loot roll",
            templateUrl: "partials/vermintide/lootandroll.html",
            controller: "PageCtrl"
        })
        .when("/vermintide/skavenenemy", {
            title: "Skaven - The Enemy",
            templateUrl: "partials/vermintide/skavenenemy.html",
            controller: "PageCtrl"
        })
        // Pages (Division)
        .when("/division", {
            title: "Tom Clancy’s The Division",
            templateUrl: "partials/division.html",
            controller: "PageCtrl"
        })
        // else 404
        .otherwise("/404", {
            title: "404",
            templateUrl: "partials/404.html",
            controller: "PageCtrl"
        });
    //check browser support
    if(window.history && window.history.pushState) {
        //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

        // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

        // if you don't wish to set base URL then use this
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        console.log("Hopp");
    });
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope, $location, $http) {
    console.log("Blog Controller reporting for duty.");
});

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
app.controller('traitCtrl', function($scope, $http) {
    console.log("Trait Controller reporting for duty.");
    $http.get('assets/json/trait-list.json')
        .then(function(response) {
            $scope.WeaponTraitList = response.data.WeaponTraitList;
            $scope.TrinketTraitList = response.data.TrinketTraitList;
        });
});