angular.module('port')
  .directive('masonryDir', function(){

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
        // external js: masonry.pkgd.js, imagesloaded.pkgd.js
        // init Masonry

        $('#section-grid').imagesLoaded(function(){
        var $grid = $('.grid').masonry({
          itemSelector: '.grid-item',
          percentPosition: true,
          columnWidth: '.grid-sizer'
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.masonry();
        });
      });
    }
  };
});
