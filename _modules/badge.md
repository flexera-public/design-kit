---
layout: module-doc
title: Badge
description: "Sass module for badges used in RightScale apps"
name: designkit-badge
source: https://github.com/rightscale-design/designkit-badge
npm: https://www.npmjs.com/package/designkit-badge
version: 0.0.2
updated: 4/11/2016
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-badge/master/css/designkit-badge.css
install: "npm install designkit-badge --save"
dependencies:
  - name: Colors
    url: /modules/colors/

slug: modules
weight: 11
---

## Install

```bash
{{ page.install }}
```

## Dependencies

<ul>
  {% for item in page.dependencies %}
    <li><a href="{{ item.url }}">{{ item.name }}</a></li>
  {% endfor %}
</ul>

## Examples

### Basic Usage

Badges are used as visual indicators for numeric values.

**HTML**

```html
<span class="badge">6</span>
```

## CSS

<div class="snippet">
  <pre id="css_contents" class="highlighter-rouge snippet-css"><code class="css"></code></pre>
</div>
