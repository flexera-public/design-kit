'use strict';

/**
 * @ngdoc downloadableIcon
 * @name designkitApp.directive:downloadableIcon
 * @restrict E
 * @param {String} src The URL of the SVG to be downloaded.
 * @param {String} name The name (title) of the image.
 * @param {String} color The hex color (minus the leading #) to be applied to every `path`
 * within the SVG.
 * @description Download an SVG image and insert it into the document as a child of this
 * element. This then sets the `fill` attribute of all `path` elements to the color given,
 * and links to download the image with the new color as an SVG or a PNG.
 */
angular.module('designkitApp').directive('downloadableIcon', function($http) {
  return {
    restrict: 'E',
    scope: {
      src: '@',
      name: '@',
      color: '@'
    },
    template: '<div class="store-preview-icon"></div><span class="store-icon-text"><span class="store-icon-name">{{ name }}</span><span class="store-download-link"><a class="store-download svg">SVG</a><a class="store-download png">PNG</a></span></span>',
    link: function(scope, element) {
      var anchors = element.find('a'),
          imageWrapper = element.find('div');

      function loadImage() {
        $http({method: 'GET', url: scope.src, cache: true}).success(function(svg) {
          var svgDataUri,
              filename = _.last(scope.src.split('/')).split('.')[0],
              image = new Image(),
              canvas = document.createElement('canvas');

          imageWrapper.html(svg);
          imageWrapper.find('path').attr('fill', '#' + scope.color);

          image.onload = function() {
            canvas.getContext('2d').drawImage(image, 0, 0);

            $(anchors[1]).attr('href', canvas.toDataURL('image/png'));
            $(anchors[1]).attr('download', filename + '.png');
          };

          svgDataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(imageWrapper.html());
          image.src = svgDataUri;

          $(anchors[0]).attr('href', svgDataUri);
          $(anchors[0]).attr('download', filename + '.svg');
        });
      }

      scope.$watch('color', loadImage);

      if (!imageWrapper.find('svg')[0]) { loadImage(); }
    }
  };
});
