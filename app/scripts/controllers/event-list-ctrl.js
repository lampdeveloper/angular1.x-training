eventsApp.controller('eventListCtrl', function($scope, Events){
    Events.list().then(function(response) {
        $scope.events = response;
    });
});