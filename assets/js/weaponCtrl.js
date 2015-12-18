/* Controller for menus */
app.controller('weaponCtrl', function($scope, $http) {
    $http.get($scope.hostUrl + 'assets/json/weapon-stats.json')
        .then(function(response) {
            $scope.bwMelee = response.data.bwMelee;
        });
});