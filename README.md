# @agency-undone/nuxt-module-matomo

Matomo Tag Manager and Matomo Analytics (formerly Piwik) module for use with Nuxt JS.

## Installation

`npm i @agency-undone/nuxt-module-matomo --save`

## Usage

Add the following to `nuxt.config.js` to include:

```js
matomo: {
  include: true | false,
  src: your_matomo_URL,
  routing: true | false,
  target: 'analytics' | 'tag-manager'
}
```
