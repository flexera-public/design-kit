---
layout: modules
title:  "Typography"
description: "Sass module for typography at RightScale."
github: https://github.com/rightscale-design/designkit-typography
npm: https://www.npmjs.com/package/designkit-typography
example: http://rightscale-design.github.io/designkit-typography/
slug: modules
weight: 2
---

## Install

```bash
npm i designkit-typography
```

## Usage

```html
<div class="headline f3 line-height-1">Headline Text</div>
<div class="bold f4">Bold body text</div>
```

## CSS

```css
/*
//
// Designkit-Typography
// --------------------------------------------------
*/
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
  margin: 0;
  line-height: 1.5;
}

h1, h2, h3,
h4, h5, h6 {
  font-family: "bariol", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  line-height: 1.25;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1rem;
}

h5 {
  font-size: .875rem;
}

h6 {
  font-size: .75rem;
}

p, dl, ol, ul, pre, blockquote {
  margin-top: 1em;
  margin-bottom: 1em;
}

code,
pre,
samp {
  font-family: "Roboto Mono", "Source Code Pro", Menlo, Consolas, "Liberation Mono", monospace;
}

code, samp {
  font-size: 87.5%;
  padding: .125em;
}

pre {
  font-size: 87.5%;
  overflow: scroll;
}

blockquote {
  font-size: 1.25rem;
  font-style: italic;
  margin-left: 0;
}

hr {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  border: 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ccc;
}

.sans {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.headline {
  font-family: "Bariol", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.mono {
  font-family: "Roboto Mono", "Source Code Pro", Menlo, Consolas, "Liberation Mono", monospace;
}

.sans-light {
  font-weight: 700;
}

.sans-regular {
  font-weight: 400;
}

.sans-medium {
  font-weight: 500;
}

.sans-semibold {
  font-weight: 600;
}

.sans-bold {
  font-weight: 700;
}

.headline-light {
  font-weight: 300;
}

.headline-regular {
  font-weight: 400;
}

.headline-bold {
  font-weight: 400;
}

.f1 {
  font-size: 2rem;
}

.f2 {
  font-size: 1.5rem;
}

.f3 {
  font-size: 1.25rem;
}

.f4 {
  font-size: 1rem;
}

.f5 {
  font-size: 0.875rem;
}

.f6 {
  font-size: 0.75rem;
}

.font-family-inherit {
  font-family: inherit;
}

.font-size-inherit {
  font-size: inherit;
}

.text-decoration-none {
  text-decoration: none;
}

.bold {
  font-weight: bold;
}

.regular {
  font-weight: normal;
}

.italic {
  font-style: italic;
}

.caps {
  text-transform: uppercase;
  letter-spacing: 1;
}

.left-align {
  text-align: left;
}

.center {
  text-align: center;
}

.right-align {
  text-align: right;
}

.justify {
  text-align: justify;
}

.nowrap {
  white-space: nowrap;
}

.break-word {
  word-wrap: break-word;
}

.line-height-1 {
  line-height: 1;
}

.line-height-2 {
  line-height: 1.125;
}

.line-height-3 {
  line-height: 1.25;
}

.line-height-4 {
  line-height: 1.5;
}

.list-style-none {
  list-style: none;
}

.underline {
  text-decoration: underline;
}
```
