---
layout: module-doc
title: Header
description: "Sass module for the RightScale nav bar"
name: designkit-header
source: https://github.com/rightscale-design/designkit-header
npm: https://www.npmjs.com/package/designkit-header
version: 1.0.0
updated: 8/7/2017
css-link: https://cdn.rawgit.com/rightscale-design/designkit-header/v1.0.0/dist/designkit-header.css
example-1: https://cdn.rawgit.com/rightscale-design/designkit-header/v1.0.0/docs/basic.html
install: "npm install designkit-header --save"

dependencies:
  - name: Colors
    url: /modules/colors/

slug: modules
weight: 6
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

### Default Header

Here's our basic header used in all products

**HTML**

```html
<header class="header-default header-skin sans">
  <div class="header-brand"><a href="/"><img src="https://cdn.rawgit.com/rightscale/design-kit/master/media/logos/gov-logo.svg" alt="RightScale Governance"/></a></div>
  <div class="header-nav">
    <nav><a href="/">Mark one</a><a href="/">Mark two</a><a href="/">Mark three</a></nav>
  </div>
</header>
```

**Example**

<iframe style="height: 105px;" src="{{ page.example-1 }}"></iframe>
