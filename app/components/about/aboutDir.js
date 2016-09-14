angular.module('port')
  .directive('aboutDir', function(){
    return {
      restrict: "EA",
      templateUrl: "app/components/about/aboutTmpl.html"
    };
  });
