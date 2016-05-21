---
layout: modules
title: Buttons
description: "Sass module for css buttons."
github: https://github.com/rightscale-design/designkit-buttons
npm: https://www.npmjs.com/package/designkit-buttons
example: http://rightscale-design.github.io/designkit-buttons/
slug: modules
weight: 5
---

## Example

<div class="animate-fade animate-delay-3">
  <p data-height="300" data-theme-id="23934" data-slug-hash="QNewrg" data-default-tab="result" data-user="jmelgoza" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jmelgoza/pen/QNewrg/">Designkit-Buttons</a> by Jason Melgoza (<a href="http://codepen.io/jmelgoza">@jmelgoza</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

## Install

```bash
npm i designkit-buttons
```

## Usage

```html
<button class="btn" type="button">Button</button>
```

## CSS

```css
/*
//
// Designkit-Buttons
// --------------------------------------------------
*/
.btn {
  position: relative;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  color: #111;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #eee;
  background-image: linear-gradient(#fcfcfc, #eee);
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  -webkit-appearance: none;
}

.btn:focus {
  text-decoration: none;
  border-color: #51a7e8;
  outline: none;
  box-shadow: 0 0 5px rgba(81, 167, 232, 0.5);
}

.btn:focus:hover, .btn.selected:focus {
  border-color: #51a7e8;
}

.btn:hover, .btn:active {
  text-decoration: none;
  background-color: #ddd;
  background-image: linear-gradient(#eee, #ddd);
  border-color: #ccc;
}

.btn:active, .btn.selected {
  background-color: #dcdcdc;
  background-image: none;
  border-color: #b5b5b5;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
}

.btn.selected:hover {
  background-color: #cfcfcf;
}

.btn:disabled, .btn:disabled:hover, .btn.disabled, .btn.disabled:hover {
  color: rgba(102, 102, 102, 0.5);
  cursor: default;
  background-color: rgba(229, 229, 229, 0.5);
  background-image: none;
  border-color: rgba(197, 197, 197, 0.5);
  box-shadow: none;
}
```
