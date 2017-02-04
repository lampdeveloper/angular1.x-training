eventsApp.directive('vote', function() {
   return {
       restrict: 'E',
       scope: {
           upvote: "&",
           downvote: "&",
           count: "@",
           alert: "&"
       },
       templateUrl: "templates/directive/vote.html",
       link: function() {
           
       }
   }
});