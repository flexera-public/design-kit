---
layout: modules
title: Badge
description: "Sass module for css badges."
github: https://github.com/rightscale-design/designkit-badge
npm: https://www.npmjs.com/package/designkit-badge
example: http://rightscale-design.github.io/designkit-badge/
slug: modules
weight: 7
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-badge/master/src/_designkit-badge.scss
html-link: https://raw.githubusercontent.com/rightscale-design/designkit-badge/master/index.html
bash: npm i designkit-badge
---

## Install

```bash
npm i designkit-badge
```

## Usage

```html
<span class="badge">6</span>
```

## CSS

```css
/*
//
// Designkit-Badge
// --------------------------------------------------
*/
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  background-color: #57626C;
  border-radius: 10px;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

a.badge:hover, a.badge:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
```
