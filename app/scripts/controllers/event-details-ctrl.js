eventsApp.controller('eventDetailsCtrl', function ($scope, $routeParams, $route, Events, Sessions) {
    console.log('$route.current.locals.eventDetails:');
console.log($route.current.locals.eventDetails);

//    $scope.event = $route.current.locals.eventDetails;
//    $scope.event.sessions = _.filter(Sessions, function (session) {
//        return ($scope.event.id === session.event_id);
//    });
    Events.get($routeParams.eventId).then(function (response) {
        $scope.event = response;

        $scope.event.sessions = _.filter(Sessions, function (session) {
            return ($scope.event.id === session.event_id);
        });
    });

    $scope.reload = function () {
        $route.reload();
    };
    $scope.upVote = function (session) {
        session.upVoteCount++;
    };

    $scope.downVote = function (session) {
        session.upVoteCount--;
    };
    $scope.alert = function() {
        alert('DDDD');
    };
});