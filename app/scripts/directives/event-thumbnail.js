eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            event:"="
        },
        templateUrl: "templates/directive/thumbnail.html"
    };
});