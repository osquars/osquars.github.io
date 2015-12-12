/* Controller for patch info on vermintide */
app.controller('patchCtrl', function($scope, $http) {
    $http.get($scope.hostUrl + 'vermintide/patchlatest.txt')
        .then(function(response) {
            $scope.patchLatest = response.data.split('\n');
            //console.log($scope.patchLatest);
        });
})