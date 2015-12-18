/* Controller for getting host adress to use for other Controllers */
app.controller('hostCtrl', function($scope, $location) {
    var host = $location.host();
    var hostUrl = "http://osquars.github.io/";
    if (host=='localhost') {
        hostUrl = "http://localhost/osquars.github.io/";
    }
    $scope.hostUrl = hostUrl;
});