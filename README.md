mimosa-nunjucks
===========

## Overview

This is a Nunjucks compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.

For more information regarding Nunjucks, see http://jlongster.github.io/nunjucks/.

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'nunjucks'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will compile Nunjucks files during `mimosa watch` and `mimosa build`.

This module utilizes all of the built-in template behavior that comes with Mimosa's basic template compiler.  See the [mimosa website](http://mimosa.io/compilers.html#mt) for more information about how templates are treated or check out the various [`template` configuration options](http://mimosa.io/configuration.html#templates).

This module also comes with a version of the `nunjucks-slim.js` file for use with precompiled templates.

## AMD Usage

Use the nunjucks library to render the templates, but make sure you bring the templates in so they are available.

```javascript
define( ['jquery', 'templates', 'vendor/nunjucks-slim'], function( $, templates, nunjucks ) {
  $('.foo').append( nunjucks.render("example", {name:'NUNJUCKS!!!'}) );
});
```

## Default Config

```javascript
nunjucks: {
  lib: undefined,
  extensions: [ "hogan" ],
  options: {}
}
```

* `lib`: You may want to use this module but may not be ready to use the latest version of Nunjucks. Using the `lib` property you can provide a specific version of Nunjucks if the one being used by this module isn't to your liking. To provide a specific version, you must have it `npm install`ed into your project and then provide it to `lib`. For instance: `lib: require('nunjucks')`.
* `extensions`: an array of strings, the extensions of your Nunjucks files.
* `options`: an object, pass through options to the nunjucks compiler, for more details, see the [nunjucks precompile options list](http://jlongster.github.io/nunjucks/api.html#precompiling).

>>>
name: name of the template, when compiling a string (required) or a file (optional, defaults to path). names are auto-generated when compiling a directory.
asFunction: generate a callable function
force: keep compiling on error
env: the Environment to use (gets extensions and async filters from it)
include: array of file/folders to include (folders are auto-included, files are auto-excluded)
exclude: array of file/folders to exclude (folders are auto-included, files are auto-excluded)



