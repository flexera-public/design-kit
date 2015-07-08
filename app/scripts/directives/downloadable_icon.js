'use strict';

/**
 * @ngdoc downloadableIcon
 * @name designkitApp.directive:downloadableIcon
 * @restrict E
 * @param {String} src The URL of the SVG to be downloaded.
 * @param {String} color The hex color (minus the leading #) to be applied to every `path`
 * within the SVG.
 * @description Download an SVG image and insert it into the document as a child of this
 * element. This then sets the `fill` attribute of all `path` elements to the color given,
 * and adds a data URI to download the icon in that color.
 */
angular.module('designkitApp').directive('downloadableIcon', function($http) {
  return {
    restrict: 'E',
    scope: {
      src: '@',
      color: '@'
    },
    template: '<a></a>',
    link: function(scope, element) {
      var anchor = element.find('a');

      function fillElement() {
        $http({method: 'GET', url: scope.src, cache: true}).success(function(svg) {
          anchor.html(svg);
          anchor.find('path').attr('fill', '#' + scope.color);
          anchor.attr('href', 'data:image/svg+xml;utf8,' + encodeURIComponent(anchor.html()));
          anchor.attr('download', _.last(scope.src.split('/')));
        });
      }

      scope.$watch('color', fillElement);

      if (!anchor.find('svg')[0]) { fillElement(); }
    }
  };
});
