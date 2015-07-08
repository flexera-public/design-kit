'use strict';

/**
 * @ngdoc downloadableIcon
 * @name designkitApp.directive:downloadableIcon
 * @restrict E
 * @param {String} src The URL of the SVG to be downloaded.
 * @param {String} name The name (title) of the image.
 * @param {String} color The hex color (minus the leading #) to be applied to every `path`
 * within the SVG.
 * @param {String} colorName The name of the color, will be appended to the download file
 * name. Will be lower-cases, and spaces converted to hyphens.
 * @description Download an SVG image and insert it into the document as a child of this
 * element. This then sets the `fill` attribute of all `path` elements to the color given,
 * and links to download the image with the new color as an SVG or a PNG.
 */
angular.module('designkitApp').directive('downloadableIcon', function($http) {
  var pngWidth = 256;

  return {
    restrict: 'E',
    scope: {
      src: '@',
      name: '@',
      color: '@',
      colorName: '@'
    },
    template: '<div class="store-preview-icon"></div><span class="store-icon-text"><span class="store-icon-name">{{ name }}</span><span class="store-download-link"><a class="store-download svg">SVG</a><a class="store-download png">PNG</a></span></span>',
    link: function(scope, element) {
      var pngLink = element.find('.png'),
          svgLink = element.find('.svg'),
          imageWrapper = element.find('div');

      function loadImage() {
        $http({method: 'GET', url: scope.src, cache: true}).success(function(svg) {
          var svgDataUri,
              svgDimensions,
              canvasHeight,
              colorFilename = scope.colorName.replace(/ +/, '-').toLowerCase(),
              filename = _.last(scope.src.split('/')).split('.')[0] + '-' + colorFilename,
              image = new Image(),
              canvas = document.createElement('canvas');

          imageWrapper.html(svg);
          imageWrapper.find('path').attr('fill', '#' + scope.color);

          svgDimensions = _.map(imageWrapper.find('svg')[0].getAttribute('viewBox').split(' '), parseFloat);
          canvasHeight = (svgDimensions[3] - svgDimensions[1]) * pngWidth / (svgDimensions[2] - svgDimensions[0]);
          canvas.width = pngWidth;
          canvas.height = canvasHeight;

          image.onload = function() {
            canvas.getContext('2d').drawImage(image, 0, 0, pngWidth, canvasHeight);

            pngLink.attr('href', canvas.toDataURL('image/png'));
            pngLink.attr('download', filename + '.png');
          };

          svgDataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(imageWrapper.html());
          image.src = svgDataUri;

          svgLink.attr('href', svgDataUri);
          svgLink.attr('download', filename + '.svg');
        });
      }

      scope.$watch('color', loadImage);

      if (!imageWrapper.find('svg')[0]) { loadImage(); }
    }
  };
});
