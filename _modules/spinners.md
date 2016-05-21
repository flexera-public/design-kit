---
layout: modules
title: Spinners
description: "Sass module for css only spinners."
github: https://github.com/rightscale-design/designkit-spinners
npm: https://www.npmjs.com/package/designkit-spinners
example: http://rightscale-design.github.io/designkit-spinners/
slug: modules
weight: 11
---

## Example
<div class="animate-fade animate-delay-3">
  <p data-height="324" data-theme-id="23934" data-slug-hash="yOmBKw" data-default-tab="result" data-user="jmelgoza" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jmelgoza/pen/yOmBKw/">Designkit-Spinners</a> by Jason Melgoza (<a href="http://codepen.io/jmelgoza">@jmelgoza</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

## Install

```bash
npm i designkit-spinners
```

## Markup

```html
<!-- Fading Dots Spinner -->
<div class="spinner-dots"></div>

<!-- Spinning Disc -->
<div class="spinner-disc"></div>
```

## CSS

```css
/*
//
// Designkit-Spinners
// --------------------------------------------------
*/
/* Disc rotate keyframe animation */
@-webkit-keyframes spinner-disc-rotate {
  0% {
    -webkit-transform: rotateZ(-360deg);
  }
  100% {
    -webkit-transform: rotateZ(0deg);
  }
}

@-moz-keyframes spinner-disc-rotate {
  0% {
    -moz-transform: rotateZ(-360deg);
  }
  100% {
    -moz-transform: rotateZ(0deg);
  }
}

@keyframes spinner-disc-rotate {
  0% {
    -webkit-transform: rotateZ(-360deg);
    -moz-transform: rotateZ(-360deg);
    -ms-transform: rotateZ(-360deg);
    -o-transform: rotateZ(-360deg);
    transform: rotateZ(-360deg);
  }
  100% {
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
}

/* Dots opacity keyframe animation */
@-webkit-keyframes spinner-dots-fade {
  0%,
  80%,
  100% {
    opacity: 1;
  }
  40% {
    opacity: .2;
  }
}

@-moz-keyframes spinner-dots-fade {
  0%,
  80%,
  100% {
    opacity: 1;
  }
  40% {
    opacity: .2;
  }
}

@keyframes spinner-dots-fade {
  0%,
  80%,
  100% {
    opacity: 1;
  }
  40% {
    opacity: .2;
  }
}

/* Disc base */
.spinner-disc {
  display: block;
  width: 10px;
  height: 10px;
}

.spinner-disc:after {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border-top: 1px solid #000;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #000;
  content: '';
  opacity: .5;
  -webkit-animation: spinner-disc-rotate 0.6s linear infinite;
  -moz-animation: spinner-disc-rotate 0.6s linear infinite;
  animation: spinner-disc-rotate 0.6s linear infinite;
}

/* Disc size options */
.spinner-disc.spinner-disc-sm:after {
  width: 10px;
  height: 10px;
}

/* Disc position (override to meet your design) */
.spinner-disc {
  position: absolute;
  top: calc(50% - 11px);
  left: calc(50% - 11px);
}

/* Dots base  */
.spinner-dots,
.spinner-dots:before,
.spinner-dots:after {
  width: 16px;
  height: 16px;
  background-color: #000;
  border-radius: 50%;
  -webkit-animation: spinner-dots-fade 1s infinite ease-in-out;
  -moz-animation: spinner-dots-fade 1s infinite ease-in-out;
  animation: spinner-dots-fade 1s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
}

.spinner-dots {
  /* Dots position */
  /* Dots first dot */
  /* Dots middle dot  */
  -webkit-animation-delay: -0.16s;
  -moz-animation-delay: -0.16s;
  animation-delay: -0.16s;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  /* Dots last dot  */
}

.spinner-dots:before, .spinner-dots:after {
  position: absolute;
  top: 0;
  content: '';
}

.spinner-dots:before {
  left: -24px;
  -webkit-animation-delay: -0.32s;
  -moz-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner-dots:after {
  left: 24px;
}

/* Dots position (override to meet your design)  */
.spinner-dots {
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
}
```
