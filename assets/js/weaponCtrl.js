/* Controller for menus */
app.controller('weaponCtrl', function($scope, $http) {
    $http.get($scope.hostUrl + 'assets/json/weapon-stats.json')
        .then(function(response) {
            $scope.weaponList = response.data.weaponList;
            $scope.bwMelee = response.data.bwMelee;
            $scope.bwRange = response.data.bwRange;
            $scope.drMelee = response.data.drMelee;
            $scope.drRange = response.data.drRange;
        });
});