---
layout: modules
title: States
description: "Sass module for css states and labels."
github: https://github.com/rightscale-design/designkit-state
npm: https://www.npmjs.com/package/designkit-state
example: http://rightscale-design.github.io/designkit-state/
slug: modules
weight: 9
---

## Install

```bash
npm i designkit-state
```

## Usage

```html
<span class="state">Default</span>
<span class="state state-success">Success</span>
<span class="state state-failed">Failed</span>
```

## The CSS

```css
/*
//
// Designkit-State
// --------------------------------------------------
*/
.state {
  display: inline-block;
  padding: 4px 8px;
  font-weight: bold;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #57626C;
  border-radius: 3px;
}

.state-success {
  background-color: #80C11A;
}

.state-failed {
  background-color: #C32525;
}
```
