---
layout: modules
title: Buttons
description: "Sass module for css buttons."
github: https://github.com/rightscale-design/designkit-buttons
npm: https://www.npmjs.com/package/designkit-buttons
example: http://rightscale-design.github.io/designkit-buttons/
iframe: https://rawgit.com/rightscale-design/designkit-buttons/9fe8d92bb97971c512a58169bc26531a989b0c62/index.html
slug: modules
weight: 5
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-buttons/master/src/_designkit-buttons.scss
html-link: https://raw.githubusercontent.com/rightscale-design/designkit-buttons/master/index.html
bash: npm i designkit-buttons
---

## Example

<div class="designkit-example animate-fade animate-delay-3">
   <iframe src="{{ page.iframe }}" frameborder="0"></iframe>
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
