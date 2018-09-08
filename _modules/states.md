---
layout: module-doc
title: State
description: "Sass module for css states and labels"
name: designkit-state
source: https://github.com/rightscale-design/designkit-state
npm: https://www.npmjs.com/package/designkit-state
version: 0.0.4
updated: 5/20/2016
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-state/master/css/designkit-state.css
install: "npm install designkit-state --save"
dependencies:
  - name: Colors
    url: /modules/colors/

slug: modules
weight: 10
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

State indicators inform users of the current status of a particular item. Currently DK includes default, success and failed indicators.

**HTML**

```html
<span class="state">Default</span>
<span class="state state-success">Success</span>
<span class="state state-failed">Failed</span>
```

## CSS

<div class="snippet">
  <pre id="css_contents" class="highlighter-rouge snippet-css"><code class="css"></code></pre>
</div>
