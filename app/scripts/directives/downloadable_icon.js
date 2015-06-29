'use strict';

/**
 * @ngdoc service
 * @name designkitApp.service:SvgCache
 * @description A plain old JavaScript object for caching SVG data responses, so that the
 * {@link designkitApp.directive:downloadableIcon} directive doesn't re-download every
 * time. (Because colors default to all selected, this will download each icon once for
 * each color initially.)
 */
angular.module('designkitApp').service('SvgCache', function() {
  return {};
});

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
angular.module('designkitApp').directive('downloadableIcon', function(SvgCache) {
  function setAttributes(anchor, link, color) {
    anchor.find('path').attr('fill', '#' + color);
    anchor.attr('href', 'data:image/svg+xml;utf8,' + encodeURIComponent(anchor.html()));
    anchor.attr('download', _.last(link.split('/')));
  }

  return {
    restrict: 'E',
    scope: {
      src: '@',
      color: '@'
    },
    template: '<a></a>',
    link: function(scope, element) {
      var anchor = element.find('a');

      if (!anchor.find('svg')[0]) {
        if (SvgCache[scope.src]) {
          anchor.html(SvgCache[scope.src]);

          setAttributes(anchor, scope.src, scope.color);
        } else {
          anchor.load(scope.src, function(svg) {
            SvgCache[scope.src] = svg;

            setAttributes(anchor, scope.src, scope.color);
          });
        }
      }
    }
  };
});
