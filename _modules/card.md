---
layout: module-doc
title: Card
description: "A basic content container module"
name: designkit-card
source: https://github.com/rightscale-design/designkit-card
npm: https://www.npmjs.com/package/designkit-card
version: 1.0.1
updated: 7/6/2017
example-1: https://cdn.rawgit.com/rightscale-design/designkit-card/master/docs/basic.html
example-2: https://cdn.rawgit.com/rightscale-design/designkit-card/master/docs/header.html
install: "npm install designkit-card --save"

slug: modules
weight: 4
---

## Install

```bash
{{ page.install }}
```

## Examples

### Basic Card

Cards are used to apply a container around a related grouping of information.

**HTML**

```html
<div class="card">
  <div class="card-content">
    <div class="card-body">
      <div>
        <!--Card Content-->
      </div>
    </div>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 250px;" src="{{ page.example-1 }}"></iframe>


### Card Header & Footer

A card can include a optional header for a title area and a footer for UI actions.

**HTML**

```html
<div class="card">
  <div class="card-content">
    <div class="card-heading">
      <h3 class="card-title">Card UI</h3>
    </div>
    <div class="card-body">
      <div>
        <!--Card Content-->
      </div>
    </div>
    <div class="card-footer">
      <div>Action bar</div>
    </div>
  </div>
</div>
```

**Example**

<iframe class="ba b--black-10 br2" style="width: 100%; height: 350px;" src="{{ page.example-2 }}"></iframe>
