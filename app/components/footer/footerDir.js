angular.module('port')
  .directive('footerDir', function(){
    return {
      restrict: "EA",
      templateUrl: "app/components/footer/footerTmpl.html"
    };
  });
