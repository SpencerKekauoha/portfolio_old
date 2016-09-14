angular.module('port')
  .directive('contactDir', function(){
    return {
      restrict: "EA",
      templateUrl: "app/components/contact/contactTmpl.html"
    };
  });
