//
// Anchor.js
// For deep anchor links on headers.
// https://github.com/bryanbraun/anchorjs
//

$(function() {
  console.log( "ready!" );
  anchors.options = {
    icon: '',
    class: 'scroll'
  };
  anchors.add('.page-content h2, .page-content h3');
});
