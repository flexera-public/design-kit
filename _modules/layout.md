---
layout: module-doc
title: Layout
description: "A Sass module for css flex layouts"
name: designkit-layout
source: https://github.com/rightscale-design/designkit-layout
npm: https://www.npmjs.com/package/designkit-layout
version: 1.0.0
updated: 8/14/2018
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-layout/master/dist/designkit-layout.css
install: "npm install designkit-layout --save"

slug: modules
weight: 16
---

## Install

```bash
{{ page.install }}
```

## Examples

### Basic Usage

This CSS module enables RS developers to more easily create modern, responsive layouts on top of CSS3 flexbox.

**HTML**

```html
HTML
<div layout="row" layout-wrap>
  <div flex="30">
    [flex="30"]
  </div>
  <div flex="45">
    [flex="45"]
  </div>
  <div flex="25">
    [flex="25"]
  </div>
  <div flex="33">
    [flex="33"]
  </div>
  <div flex="67">
    [flex="67"]
  </div>
  <div flex="50">
    [flex="50"]
  </div>
  <div flex>
    [flex]
  </div>
</div>
```

## CSS

<div class="snippet">
  <pre id="css_contents" class="highlighter-rouge snippet-css"><code class="css"></code></pre>
</div>
