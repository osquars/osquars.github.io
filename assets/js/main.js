/**
 * Main AngularJS Web Application
 */
var app = angular.module('pageApp', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
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
        .when("/bloodmooninn/linktips", {
            title: "Link and Tips",
            templateUrl: "partials/bloodmooninn/linktips.html",
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
        .when("/division/theagents", {
            title: "The Agents",
            templateUrl: "partials/division/theagents.html",
            controller: "PageCtrl"
        })
        .when("/division/items", {
            title: "Items",
            templateUrl: "partials/division/items.html",
            controller: "PageCtrl"
        })
        .when("/division/weapons", {
            title: "Weapons",
            templateUrl: "partials/division/weapons.html",
            controller: "weaponsCtrl"
        })
        .when("/division/factions", {
            title: "Items",
            templateUrl: "partials/division/factions.html",
            controller: "PageCtrl"
        })
        .when("/division/abilities", {
            title: "Abilities",
            templateUrl: "partials/division/abilities.html",
            controller: "PageCtrl"
        })
        .when("/division/baseofoperation", {
            title: "Base of Operation",
            templateUrl: "partials/division/baseofoperation.html",
            controller: "PageCtrl"
        })
        // else 404
        .otherwise("/404", {
            title: "404",
            templateUrl: "partials/404.html",
            controller: "PageCtrl"
        });
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
/* Controller for Division weapons */
app.controller('weaponsCtrl', function($scope, $http) {
    console.log("Weapons Controller reporting for duty.");
    $http.get('assets/json/weapons.json')
        .then(function(response) {
            $scope.dPistols = response.data.dPistols;
            $scope.dShotguns = response.data.dShotguns;
            $scope.dSubmachine = response.data.dSubmachine;
            $scope.dAssault = response.data.dAssault;
            $scope.dDMR = response.data.dDMR;
            $scope.dLMG = response.data.dLMG;
        });
});