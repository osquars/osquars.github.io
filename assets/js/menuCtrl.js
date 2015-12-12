/* Controller for menus */
app.controller('menuCtrl', function($scope, $http, $location) {
    $http.get($scope.hostUrl + 'assets/json/headerbar.json')
        .then(function(response) {
            $scope.mainlinks = response.data.mainmenu;
            // Sublink need to be set for the right submenu from the JSON file.
            $scope.sublinks = response.data.vermintidemenu;
            $scope.location = $location;
            //console.log($scope.location);
        });
});
