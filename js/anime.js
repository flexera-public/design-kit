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
  fill: ['#1c47b7', '#fff'],
  stroke: [
    {
      value: ["#1c47b7", "#fff"],
      delay: 0
    }
  ],
  duration: 1600,
  delay: 2000,
  direction: 'alternate',
  loop: false,
  opacity: [
    {
      value: [0, 1],
      delay: 0
    }
  ]
});

// var ringsFade = anime({
//   targets: '.dk-rings #d-link',
//   easing: 'easeInOutSine',
//   duration: 1000,
//   delay: 1000,
//   direction: 'alternate',
//   loop: false,
//   opacity: [0, 1]
// });
