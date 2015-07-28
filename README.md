# Design Kit v1.0

A visual branding guide for RightScale products.

## Install

Run `npm install` and  `bower install` to download dependencies.

## Preview

Run `grunt` or `grunt build` for building and `grunt serve` for preview.

## Development

Install `yo`, `grunt-cli`, `bower`, `generator-angular` and `generator-karma`:
```
npm install -g grunt-cli bower yo generator-karma generator-angular
```

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

Here are a few helpful generators to get you started:

```bash
yo angular:route myroute
```

```bash
yo angular:controller user
```

```bash
yo angular:directive myDirective
```

```bash
yo angular:view user
```

## Testing

Running `grunt test` will run the unit tests with karma.

## Deploy

In your feature branch run `grunt build`, once your feature is peer reviewed and merged run this sequence:

```bash
git co master
git pull
git subtree push --prefix dist origin gh-pages
```

## Github Page

[http://rightscale.github.io/design-kit](http://rightscale.github.io/design-kit)