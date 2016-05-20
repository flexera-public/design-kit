---
layout: modules
title:  "Utilities"
description: "Sass module containing utility classes to help design apps."
github: https://github.com/rightscale-design/designkit-utilities
npm: https://www.npmjs.com/package/designkit-utilities
example: http://rightscale-design.github.io/designkit-utilities/
slug: modules
weight: 13
---

## Install

```bash
npm i designkit-utilities
```

## Usage

```html
<div class="cf">
  <div class="fl w-50 pa4 ba b-grey br1 shadow">
    <div class="color-heading b mb2">Utilities Test</div>
    <div class="color-text sans mb2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae consectetur velit recusandae vel earum? Esse, nostrum dignissimos corrupti, magni deleniti modi culpa accusamus assumenda consequatur maxime voluptatum iure vitae nemo.</div>
  </div>
</div>
```

## CSS

```css
/*
//
// Designkit-Utilities
// --------------------------------------------------
*/
.dn {
  display: none;
}

.di {
  display: inline;
}

.db {
  display: block;
}

.dib {
  display: inline-block;
}

.dit {
  display: inline-table;
}

.dt {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.dtr {
  display: table-row;
}

.dtc {
  display: table-cell;
}

.dtcol {
  display: table-column;
}

.dtcolg {
  display: table-column-group;
}

.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.cf::after, .clearfix::after {
  clear: both;
  content: "";
  display: table;
}

.fl, .pull-left {
  float: left;
  display: inline;
}

.fr, .pull-right {
  float: right;
  display: inline;
}

.fn {
  float: none;
}

.pa0 {
  padding: 0;
}

.pa1 {
  padding: .25rem;
}

.pa2 {
  padding: .5rem;
}

.pa3 {
  padding: 1rem;
}

.pa4 {
  padding: 2rem;
}

.pa5 {
  padding: 4rem;
}

.pa6 {
  padding: 8rem;
}

.pa7 {
  padding: 16rem;
}

.pl0 {
  padding-left: 0;
}

.pl1 {
  padding-left: .25rem;
}

.pl2 {
  padding-left: .5rem;
}

.pl3 {
  padding-left: 1rem;
}

.pl4 {
  padding-left: 2rem;
}

.pl5 {
  padding-left: 4rem;
}

.pl6 {
  padding-left: 8rem;
}

.pl7 {
  padding-left: 16rem;
}

.pr0 {
  padding-right: 0;
}

.pr1 {
  padding-right: .25rem;
}

.pr2 {
  padding-right: .5rem;
}

.pr3 {
  padding-right: 1rem;
}

.pr4 {
  padding-right: 2rem;
}

.pr5 {
  padding-right: 4rem;
}

.pr6 {
  padding-right: 8rem;
}

.pr7 {
  padding-right: 16rem;
}

.pb0 {
  padding-bottom: 0;
}

.pb1 {
  padding-bottom: .25rem;
}

.pb2 {
  padding-bottom: .5rem;
}

.pb3 {
  padding-bottom: 1rem;
}

.pb4 {
  padding-bottom: 2rem;
}

.pb5 {
  padding-bottom: 4rem;
}

.pb6 {
  padding-bottom: 8rem;
}

.pb7 {
  padding-bottom: 16rem;
}

.pt0 {
  padding-top: 0;
}

.pt1 {
  padding-top: .25rem;
}

.pt2 {
  padding-top: .5rem;
}

.pt3 {
  padding-top: 1rem;
}

.pt4 {
  padding-top: 2rem;
}

.pt5 {
  padding-top: 4rem;
}

.pt6 {
  padding-top: 8rem;
}

.pt7 {
  padding-top: 16rem;
}

.pv0 {
  padding-top: 0;
  padding-bottom: 0;
}

.pv1 {
  padding-top: .25rem;
  padding-bottom: .25rem;
}

.pv2 {
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.pv3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.pv4 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.pv5 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.pv6 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.pv7 {
  padding-top: 16rem;
  padding-bottom: 16rem;
}

.ph0 {
  padding-left: 0;
  padding-right: 0;
}

.ph1 {
  padding-left: .25rem;
  padding-right: .25rem;
}

.ph2 {
  padding-left: .5rem;
  padding-right: .5rem;
}

.ph3 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.ph4 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.ph5 {
  padding-left: 4rem;
  padding-right: 4rem;
}

.ph6 {
  padding-left: 8rem;
  padding-right: 8rem;
}

.ph7 {
  padding-left: 16rem;
  padding-right: 16rem;
}

.ma0 {
  margin: 0;
}

.ma1 {
  margin: .25rem;
}

.ma2 {
  margin: .5rem;
}

.ma3 {
  margin: 1rem;
}

.ma4 {
  margin: 2rem;
}

.ma5 {
  margin: 4rem;
}

.ma6 {
  margin: 8rem;
}

.ma7 {
  margin: 16rem;
}

.ml0 {
  margin-left: 0;
}

.ml1 {
  margin-left: .25rem;
}

.ml2 {
  margin-left: .5rem;
}

.ml3 {
  margin-left: 1rem;
}

.ml4 {
  margin-left: 2rem;
}

.ml5 {
  margin-left: 4rem;
}

.ml6 {
  margin-left: 8rem;
}

.ml7 {
  margin-left: 16rem;
}

.mr0 {
  margin-right: 0;
}

.mr1 {
  margin-right: .25rem;
}

.mr2 {
  margin-right: .5rem;
}

.mr3 {
  margin-right: 1rem;
}

.mr4 {
  margin-right: 2rem;
}

.mr5 {
  margin-right: 4rem;
}

.mr6 {
  margin-right: 8rem;
}

.mr7 {
  margin-right: 16rem;
}

.mb0 {
  margin-bottom: 0;
}

.mb1 {
  margin-bottom: .25rem;
}

.mb2 {
  margin-bottom: .5rem;
}

.mb3 {
  margin-bottom: 1rem;
}

.mb4 {
  margin-bottom: 2rem;
}

.mb5 {
  margin-bottom: 4rem;
}

.mb6 {
  margin-bottom: 8rem;
}

.mb7 {
  margin-bottom: 16rem;
}

.mt0 {
  margin-top: 0;
}

.mt1 {
  margin-top: .25rem;
}

.mt2 {
  margin-top: .5rem;
}

.mt3 {
  margin-top: 1rem;
}

.mt4 {
  margin-top: 2rem;
}

.mt5 {
  margin-top: 4rem;
}

.mt6 {
  margin-top: 8rem;
}

.mt7 {
  margin-top: 16rem;
}

.mv0 {
  margin-top: 0;
  margin-bottom: 0rem;
}

.mv1 {
  margin-top: .25rem;
  margin-bottom: .25rem;
}

.mv2 {
  margin-top: .5rem;
  margin-bottom: .5rem;
}

.mv3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mv4 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.mv5 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.mv6 {
  margin-top: 8rem;
  margin-bottom: 8rem;
}

.mv7 {
  margin-top: 16rem;
  margin-bottom: 16rem;
}

.mv-auto {
  margin-left: auto;
  margin-right: auto;
}

.mh0 {
  margin-left: 0;
  margin-right: 0;
}

.mh1 {
  margin-left: .25rem;
  margin-right: .25rem;
}

.mh2 {
  margin-left: .5rem;
  margin-right: .5rem;
}

.mh3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mh4 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.mh5 {
  margin-left: 4rem;
  margin-right: 4rem;
}

.mh6 {
  margin-left: 8rem;
  margin-right: 8rem;
}

.mh7 {
  margin-left: 16rem;
  margin-right: 16rem;
}

.ba {
  border-style: solid;
  border-width: 1px;
}

.bt {
  border-top-style: solid;
  border-top-width: 1px;
}

.br {
  border-right-style: solid;
  border-right-width: 1px;
}

.bb {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.bl {
  border-left-style: solid;
  border-left-width: 1px;
}

.bn {
  border-style: none;
  border-width: 0;
}

.bw0 {
  border-width: 0;
}

.bw1 {
  border-width: .125rem;
}

.bw2 {
  border-width: .25rem;
}

.bw3 {
  border-width: .5rem;
}

.bw4 {
  border-width: 1rem;
}

.bw5 {
  border-width: 2rem;
}

.b-grey {
  border-color: #D1D6DC;
}

.b-grey-light {
  border-color: #e2e5e9;
}

.b-blue {
  border-color: #0A83F6;
}

.b-green {
  border-color: #80C11A;
}

.b-red {
  border-color: #C32525;
}

.br0 {
  border-radius: 0;
}

.br1 {
  border-radius: .125rem;
}

.br2 {
  border-radius: .25rem;
}

.br3 {
  border-radius: .5rem;
}

.br4 {
  border-radius: 1rem;
}

.br-100 {
  border-radius: 100%;
}

.br--top {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.br--right {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.br--bottom {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.br--left {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.o-100 {
  opacity: 1;
}

.o-90 {
  opacity: .9;
}

.o-80 {
  opacity: .8;
}

.o-70 {
  opacity: .7;
}

.o-60 {
  opacity: .6;
}

.o-50 {
  opacity: .5;
}

.o-40 {
  opacity: .4;
}

.o-30 {
  opacity: .3;
}

.o-20 {
  opacity: .2;
}

.o-10 {
  opacity: .1;
}

.o-05 {
  opacity: .05;
}

.o-025 {
  opacity: .025;
}

.v-base {
  vertical-align: baseline;
}

.v-sub {
  vertical-align: sub;
}

.v-sup {
  vertical-align: super;
}

.v-txt-top {
  vertical-align: text-top;
}

.v-txt-btm {
  vertical-align: text-bottom;
}

.v-mid {
  vertical-align: middle;
}

.v-top {
  vertical-align: top;
}

.v-btm {
  vertical-align: bottom;
}

.static {
  position: static;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.bottom-0 {
  bottom: 0;
}

.left-0 {
  left: 0;
}

.top-1 {
  top: 1rem;
}

.right-1 {
  right: 1rem;
}

.bottom-1 {
  bottom: 1rem;
}

.left-1 {
  left: 1rem;
}

.top-2 {
  top: 2rem;
}

.right-2 {
  right: 2rem;
}

.bottom-2 {
  bottom: 2rem;
}

.left-2 {
  left: 2rem;
}

.top--1 {
  top: -1rem;
}

.right--1 {
  right: -1rem;
}

.bottom--1 {
  bottom: -1rem;
}

.left--1 {
  left: -1rem;
}

.top--2 {
  top: -2rem;
}

.right--2 {
  right: -2rem;
}

.bottom--2 {
  bottom: -2rem;
}

.left--2 {
  left: -2rem;
}

.absolute--fill {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.w1 {
  width: 1rem;
}

.w2 {
  width: 2rem;
}

.w3 {
  width: 4rem;
}

.w4 {
  width: 8rem;
}

.w5 {
  width: 16rem;
}

.w-10 {
  width: 10%;
}

.w-20 {
  width: 20%;
}

.w-25 {
  width: 25%;
}

.w-33 {
  width: 33%;
}

.w-34 {
  width: 34%;
}

.w-40 {
  width: 40%;
}

.w-50 {
  width: 50%;
}

.w-60 {
  width: 60%;
}

.w-75 {
  width: 75%;
}

.w-80 {
  width: 80%;
}

.w-100 {
  width: 100%;
}

.w-auto {
  width: auto;
}

.h1 {
  height: 1rem;
}

.h2 {
  height: 2rem;
}

.h3 {
  height: 4rem;
}

.h4 {
  height: 8rem;
}

.h5 {
  height: 16rem;
}

.h-25 {
  height: 25%;
}

.h-50 {
  height: 50%;
}

.h-75 {
  height: 75%;
}

.h-100 {
  height: 100%;
}

.h-at {
  height: auto;
}

.h-i {
  height: inherit;
}

.overflow-visible {
  overflow: visible;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-scroll {
  overflow: scroll;
}

.overflow-auto {
  overflow: auto;
}

.overflow-x-visible {
  overflow-x: visible;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-x-scroll {
  overflow-x: scroll;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-visible {
  overflow-y: visible;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.overflow-y-auto {
  overflow-y: auto;
}

.color-link {
  color: #0A83F6;
}

.color-link-hover {
  color: #0769c6;
}

.color-text {
  color: #76899A;
}

.color-heading {
  color: #57626C;
}

.lh-solid {
  line-height: 1;
}

.lh-title {
  line-height: 1.3;
}

.lh-copy {
  line-height: 1.6;
}

.normal {
  font-weight: normal;
}

.b {
  font-weight: bold;
}

.fw1 {
  font-weight: 100;
}

.fw2 {
  font-weight: 200;
}

.fw3 {
  font-weight: 300;
}

.fw4 {
  font-weight: 400;
}

.fw5 {
  font-weight: 500;
}

.fw6 {
  font-weight: 600;
}

.fw7 {
  font-weight: 700;
}

.fw8 {
  font-weight: 800;
}

.fw9 {
  font-weight: 900;
}

.bg-highlight-hover {
  background-color: #FAFAFA;
}

.bg-highlight-select {
  background-color: #FAFAFA;
}

.bg-highlight-inline {
  background-color: #E2E5E9;
}

.bg-header {
  background-color: #f5f5f5;
}

.bg-white {
  background-color: #fff;
}

.vis-visible {
  visibility: visible;
}

.vis-hidden {
  visibility: hidden;
}

.vis-collapse {
  visibility: collapse;
}

.vis-inherit {
  visibility: inherit;
}

.vis-initial {
  visibility: initial;
}

.vis-unset {
  visibility: unset;
}

.hover-highlight {
  background-color: #fff;
  transition: background-color .500ms ease-in;
}

.hover-highlight:hover {
  background-color: #FAFAFA;
}

.cursor-auto {
  cursor: auto;
}

.cursor-default {
  cursor: default;
}

.cursor-none {
  cursor: none;
}

.cursor-help {
  cursor: help;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-text {
  cursor: text;
}

.cursor-vertical-text {
  cursor: vertical-text;
}

.cursor-move {
  cursor: move;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.shadow {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.tl {
  text-align: left;
}

.tr {
  text-align: right;
}

.tc {
  text-align: center;
}

.hide {
  display: none !important;
}

.show {
  display: block !important;
}

.invisible {
  visibility: hidden;
}

.scroll {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
}

.user-select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.user-select-all {
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all;
  user-select: all;
}

body.fullbleed {
  margin: 0;
  padding: 0;
  height: 100vh;
}
```
