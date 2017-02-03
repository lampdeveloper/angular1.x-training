eventsApp.controller('menuCtrl', function ($scope, $location) {
    $scope.goToEventAdd = function () {
        $location.replace();
        $location.url('/newEvent');
    };
});