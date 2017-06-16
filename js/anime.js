//
// anime.js
// JavaScript Animation Engine
// http://animejs.com/documentation/
//

// dk art
var lineDrawing = anime({
  targets: '#dk-lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  fill: '#353B41',
  duration: 1600,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false,
});

// rings art
var rings = anime({
  targets: '#dk-rings path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  opacity: {
    value: [0, 0.7],
    duration: 300
  },
  delay: function(el, i) { return i * 250 },
  loop: false,
});
