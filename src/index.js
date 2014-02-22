"use strict";

var path = require( "path" )
  , _ = require( "lodash" )
  , config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.nunjucks.extensions;
  };

var prefix = function ( mimosaConfig, libraryPath ) {
  if ( mimosaConfig.template.wrapType === "amd" ) {
    return "define(['" + libraryPath + "'], function (nunjucks){\n";
  } else {
    if ( mimosaConfig.template.wrapType === "common" ) {
      return "var nunjucks = require('" + mimosaConfig.template.commonLibPath + "');\n";
    }
  }

  return "";
};

var suffix = function ( mimosaConfig ) {
  if ( mimosaConfig.template.wrapType === "amd" ) {
    return "});";
  }

  return "";
};

var compile = function ( mimosaConfig, file, cb ) {
  var error
    , output
    , opts = _.clone(mimosaConfig.nunjucks.options);

  opts.name = file.templateName;

  try {
    output = mimosaConfig.nunjucks.lib.precompileString( file.inputFileText, opts );
  } catch ( err ) {
    error = err;
  }

  cb( error, output );
};

module.exports = {
  name: "nunjucks",
  compilerType: "template",
  clientLibrary: path.join( __dirname, "client", "nunjucks-slim.js" ),
  handlesNamespacing: true,
  compile: compile,
  suffix: suffix,
  prefix: prefix,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};