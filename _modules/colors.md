---
layout: modules
title: Colors
description: "Sass module for RightScale colors."
github: https://github.com/rightscale-design/designkit-colors
npm: https://www.npmjs.com/package/designkit-colors
example: http://rightscale-design.github.io/designkit-colors/
slug: modules
weight: 1
css-link: https://raw.githubusercontent.com/rightscale-design/designkit-colors/master/css/designkit-colors.css
html-link: https://raw.githubusercontent.com/rightscale-design/designkit-colors/master/index.html
bash: npm i designkit-colors
---

## Install

```bash
npm i designkit-colors
```

## Variables

```scss
@charset "UTF-8";

//
// Designkit
// COLOR VARIABLES
// --------------------------------------------------

// Brand Colors
$green: #80C11A;
$blue: #0A83F6;
$red: #C32525;
$purple: #7355A6;
$orange: #F7A626;

// Graph Colors
$viking: #4FBBCD;
$royal-purple: #7355A6;
$mulberry: #C45887;
$buckthorn: #F7A626;
$celery: #B4CB55;
$indian: #D05A5A;
$silver-tree: #5DD08B;
$sean: #3C8CC7;

// Button Colors
$green-button: #5fb000;
$blue-button: #0871d4;
$red-button: #C32525;
$grey-button: #E7E7E7;
$default-button: $grey-button;
$primary-button: $green-button;
$secondary-button: $blue-button;
$destructive-button: $red-button;

// Text Colors
$link: #0A83F6;
$link-hover: darken(#0A83F6, 10%);
$text: #76899A;
$heading: #57626C;

// Section Colors
$left-background-dark: #353B41;
$left-background-light: #DADEE3;
$body: #F4F5F7;

// Border Colors
$grey-border: #D1D6DC;
$grey-border-light: lighten($grey-border,6%);

// Icon Colors
$grey-icon: #57626C;
$grey-icon-highlight: #A2AFBA;
$blue-icon: #2390F7;
$blue-icon-highlight: #54A9F9;
$green-icon: #80C11A;
$sith-icon: #30373C;

// Highlight Colors
$hover-highlight: #FAFAFA;
$select-highlight: #FAFAFA;
$inline-highlight: #E2E5E9;

// Messaging Colors
$messaging-background: #FFF7E5;
$messaging-text: #69685D;

// Header Colors
$header-flat: #0069CC;
$header-gradient-start: #076CCA;
$header-gradient-end: #065BAC;

// Grayscale Colors
$black-10: darken(#fff, 10%);
$black-20: darken(#fff, 20%);
$black-30: darken(#fff, 30%);
$black-40: darken(#fff, 40%);
$black-50: darken(#fff, 50%);
$black-60: darken(#fff, 60%);
$black-70: darken(#fff, 70%);
$black-80: darken(#fff, 80%);
$black-90: darken(#fff, 90%);
```

## Markup

```html
<!--Brand Colors-->
<div class="green">Green Background</div>
<div class="blue">Blue Background</div>
<div class="red">Red Background</div>
<div class="purple">Purple Background</div>
<div class="orange">Orange Background</div>

<!--Graph Colors-->
<div class="viking">Green Background</div>
<div class="royal-purple">Royal-purple Background</div>
<div class="Buckthorn">Buckthorn Background</div>
<div class="Celery">Celery Background</div>
<div class="Indian">Indian Background</div>
<div class="silver-tree">Silver-tree Background</div>
<div class="Sean">Sean Background</div>

<!--Button Colors-->
<div class="green-button">Green Button Background</div>
<div class="blue-button">Blue Button Background</div>
<div class="red-button">Red Button Background</div>
<div class="grey-button">Green Button Background</div>
<div class="default-button">Default Button Background</div>
<div class="primary-button">Primary Button Background</div>
<div class="secondary-button">Secondary Background</div>
<div class="destructive-button">Sean Button Background</div>

<!--Text Colors-->
<div class="link">Link Color</div>
<div class="link-hover">Link Hover Color</div>
<div class="text">Text Color</div>
<div class="heading">Heading Color</div>

<!--Section Colors-->
<div class="left-background-dark">Left Background Dark</div>
<div class="left-background-light">Left Background Light</div>
<div class="body">Body Background</div>

<!--Header Colors-->
<div class="header-flat">Header Flat Background</div>
<div class="header-gradient-start">Header Gradient Start Background</div>
<div class="header-gradient-end">Header Gradient End Background</div>

<!-- Grayscale Colors-->
<div class="black-10">Black-10</div>
<div class="black-20">Black-20</div>
<div class="black-30">Black-30</div>
<div class="black-40">Black-40</div>
<div class="black-50">Black-50</div>
<div class="black-60">Black-60</div>
<div class="black-70">Black-70</div>
<div class="black-80">Black-80</div>
<div class="black-90">Black-90</div>
```
