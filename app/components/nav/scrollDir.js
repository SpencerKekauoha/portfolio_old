angular.module('port')
  .directive('scrollDir', function(){
    return {
      restrict: "A",
      link: function(scope, elem, attrs) {
            var section1Btn = document.getElementById("section1Btn"),
            port2Btn = document.getElementById("port2Btn"),
            section3Btn = document.getElementById("section3Btn"),
            section4Btn = document.getElementById("section4Btn"),
            section5Btn = document.getElementById("section5Btn"),
            portBtn = document.getElementById("portBtn"),
            horz1Btn = document.getElementById("horz1Btn"),
            horz2Btn = document.getElementById("horz2Btn"),
            horz3Btn = document.getElementById("horz3Btn"),
            gridBtn = document.getElementById("gridBtn"),
            landingImgBtn = document.getElementById("landingImgBtn");

        section1Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:0}});
        };

        port2Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section2", offsetY:0}});
        };

        section3Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section3", offsetY:40}});
        };

        section4Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section4", offsetY:0}});
        };

        section5Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section2", offsetY:0}});
        };

        portBtn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:0}});
        };

        horz1Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section2", offsetY:0}});
        };

        horz2Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section3", offsetY:0}});
        };

        horz3Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section4", offsetY:0}});
        };

        horz1Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section-grid", offsetY:0}});
        };

        landingImgBtn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section-grid", offsetY:0}});
        };
      }
    };
  });
