angular.module('port')
  .directive('portfolioDir', function(){
    return {
      restrict: "EA",
      templateUrl: "app/components/portfolio/portfolioTmpl.html"
    };
  });
