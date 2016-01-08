
# metalsmith-typeset


  A Metalsmith plugin to enhance typography in HTML — abbreviations, quotes and dashes, non-breaking spaces after prepositions. Uses [Typeset.js](https://github.com/davidmerfield/Typeset).

## Installation

    $ npm install metalsmith-typeset

## CLI Usage

  Install via npm and then add the `metalsmith-typeset` key to your `metalsmith.json` plugins:

```json
{
  "plugins": {
    "metalsmith-typeset": {
    }
  }
}
```

## Javascript Usage

  Pass `options` to the typeset plugin and pass it to Metalsmith with the `use` method:

```js
var typeset = require('metalsmith-typeset');

metalsmith.use(typeset({
}));
```

  Call it after the `metalsmith-markdown` plugin, so that HTML files are available.

## Options

  Options are passed to Typeset.js

## Alternatives

  This plugin is a slight variation of [Anton Zhiyanov's metalsmith-typography](https://github.com/algenon/metalsmith-typography). That plugin uses [Richtypo](https://github.com/sapegin/richtypo.js) under the hood instead of Typeset.js

## License

  MIT
