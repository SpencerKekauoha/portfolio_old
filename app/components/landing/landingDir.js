angular.module('port')
  .directive('landingDir', function(){
    return {
      restrict: "EA",
      templateUrl: "app/components/landing/landingTmpl.html"
    };
  });
