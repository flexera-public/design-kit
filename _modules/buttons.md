---
layout: module-doc
title: Buttons
description: "Sass module for buttons used in RightScale apps"
name: designkit-buttons
source: https://github.com/rightscale-design/designkit-buttons
npm: https://www.npmjs.com/package/designkit-buttons
version: 1.1.1
updated: 7/30/2017
css-link: https://unpkg.com/designkit-buttons@1.1.1/dist/designkit-buttons.css
example-1: https://cdn.rawgit.com/rightscale-design/designkit-buttons/v1.1.1/docs/default.html
example-2: https://cdn.rawgit.com/rightscale-design/designkit-buttons/v1.1.1/docs/primary.html
example-3: https://cdn.rawgit.com/rightscale-design/designkit-buttons/v1.1.1/docs/success.html
example-4: https://cdn.rawgit.com/rightscale-design/designkit-buttons/v1.1.1/docs/danger.html
example-5: https://cdn.rawgit.com/rightscale-design/designkit-buttons/v1.1.1/docs/sizes.html
example-6: https://cdn.rawgit.com/rightscale-design/designkit-buttons/v1.1.1/docs/button-groups.html

install: "npm install designkit-buttons --save"

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

### Default Button Skin

Buttons are used as triggers for actions. They are used in forms, cards, dialog footers and as stand-alone action triggers.

**HTML**

```html
<button class="btn btn-default" type="button">Button</button>

<a href="#" class="btn btn-default">Button Link</a>
```

**Example**

<iframe style="height: 105px;" src="{{ page.example-1 }}"></iframe>

### Primary Skin

**HTML**

```html
<button class="btn btn-primary" type="button">Button</button>

<a href="#" class="btn btn-primary">Button Link</a>
```

**Example**

<iframe style="height: 105px;" src="{{ page.example-2 }}"></iframe>

### Success Skin

**HTML**

```html
<button class="btn btn-success" type="button">Button</button>

<a href="#" class="btn btn-success">Button Link</a>
```

**Example**

<iframe style="height: 105px;" src="{{ page.example-3 }}"></iframe>

### Danger Skin

**HTML**

```html
<button class="btn btn-danger" type="button">Button</button>

<a href="#" class="btn btn-danger">Button Link</a>
```

**Example**

<iframe style="height: 105px;" src="{{ page.example-4 }}"></iframe>

### Size Options

**HTML**

```html
<button class="btn btn-sm btn-default" type="button">Button</button>

<button class="btn btn-lg btn-default" type="button">Button</button>

```

**Example**

<iframe style="height: 200px;" src="{{ page.example-5 }}"></iframe>

### Button Groups

**HTML**

```html
<div class="btn-group">
  <button class="btn btn-default" type="button">Button One</button>
  <button class="btn btn-default" type="button">Button Two</button>
  <button class="btn btn-default" type="button">Button Three</button>
</div>
```

**Example**

<iframe style="height: 110px;" src="{{ page.example-6 }}"></iframe>

## CSS

<div class="snippet">
  <pre id="css_contents" class="highlighter-rouge snippet-css"><code class="css"></code></pre>
</div>
