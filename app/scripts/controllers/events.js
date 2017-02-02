eventsApp.controller('events', function($scope, Events) {
    // Save
   $scope.saveEvent = function (event, newEventForm) {
        if (newEventForm.$valid) {
            Events.create(event).then(function (response) {
                console.log('success', response);
            }, function (error) {
                console.log('failure', error);
            });
        }
    };
    
    // List
    Events.list().then(function(response) {
        $scope.events = response;
    });
    
    // GET
    Events.get('1').then(function(response){
        $scope.event = response;
        $scope.event.sessions = _.filter(Sessions, function(s){
           return s.event_id === $scope.event.id;  
        });
        $scope.event.sessions = _.filter(Sessions, function (s) {
            return s.event_id === $scope.event.id;
        });
    });
    
    $scope.upVote = function (session) {
        session.upVoteCount++;
    };
    
    $scope.downVote = function (session) {
        session.upVoteCount--;
    };
});